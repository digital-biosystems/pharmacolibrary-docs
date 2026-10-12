<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;imidapril&quot;}]"></div>

# imidapril

- **generic name:** imidapril
- **ATC codes:** `C09AA16`
- **DrugBank:** [DB11783](https://go.drugbank.com/drugs/DB11783) · **PubChem:** [CID 5464343](https://pubchem.ncbi.nlm.nih.gov/compound/5464343)
- **molar mass:** 405.4449 g/mol (C20H27N3O6) — DrugBank
- **groups:** investigational

## About

Imidapril is an ACE inhibitor used to treat arterial hypertension. It is not authorised in the European Union and is considered investigational in major drug databases, though it has been marketed in some countries.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1041804](https://www.wikidata.org/wiki/Q1041804) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:34 | 3:33 | 0/0/0 | 1/0/0 | 0/0/2 | 105,082/5,611 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 11/4 | 2/9 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> | [Harder_1997_ACE](drugs/drug_imidapril/pd_Harder_1997_ACE.md) | ACE-activity ← imidaprilat · direct Emax (saturable) effect | — | Harder S et al., Pharmacokinetic and pharmacodynamic int…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.00588.x](https://doi.org/10.1046/j.1365-2125.1997.00588.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0), gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span> | **ACE2** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Chen_2016](drugs/drug_imidapril/pgx_Chen_2016_ACE2_Q100.md) | Chen YY et al., Impact of ACE2 gene polymorphism on ant…, Journal of human hypertensi… (2016) | [10.1038/jhh.2016.24](https://doi.org/10.1038/jhh.2016.24) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25), gpt-oss:120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial 0/2</span> | **CES1** | `Q32` · Cmax | formation | [Merali_2014](drugs/drug_imidapril/pgx_Merali_2014_CES1_Q32.md) | Merali Z et al., The pharmacogenetics of carboxylesteras…, Drug metabolism and drug in… (2014) | [10.1515/dmdi-2014-0009](https://doi.org/10.1515/dmdi-2014-0009) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 57 returned
- **screened:** 12  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamada_1992_2.pdf` | Yamada Y et al., Metabolic fate of the new angiotensin-c…, Arzneimittel-Forschung (1992) | popPK | 10 | not captured | [1642668](https://pubmed.ncbi.nlm.nih.gov/1642668) | The study reports quantitative PK parameters for imidapril in rats and dogs, but the specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| `Yamada_1992.pdf` | Yamada Y et al., Metabolic fate of the new angiotensin-c…, Arzneimittel-Forschung (1992) | popPK | 9 | not captured | [1642673](https://pubmed.ncbi.nlm.nih.gov/1642673) | The study reports quantitative pharmacokinetic parameters (half-lives) for the active metabolite of imidapril in animals, but specific clearance or volume values are not present in the provided abstract text. |
| `Yamanaka_1997_2.pdf` | Yamanaka K et al., Pharmacokinetic and pharmacodynamic stu…, Journal of pharmaceutical a… (1997) | popPK | 9 | [10.1016/s0731-7085(96)02015-8](https://doi.org/10.1016/s0731-7085(96)02015-8) | [9278890](https://pubmed.ncbi.nlm.nih.gov/9278890) | The study reports PK/PD of imidaprilat (active metabolite of imidapril) in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yamanaka_1996.pdf` | Yamanaka K et al., Steady-state pharmacokinetics and pharm…, Journal of pharmaceutical s… (1996) | popPK | 8 | [10.1021/js9600033](https://doi.org/10.1021/js9600033) | [8923331](https://pubmed.ncbi.nlm.nih.gov/8923331) | The study reports steady-state pharmacokinetics of imidaprilat (active metabolite) in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| `Yamanaka_1997.pdf` | Yamanaka K et al., Pharmacokinetics and pharmacodynamics o…, Journal of pharmaceutical a… (1997) | popPK | 8 | [10.1016/s0731-7085(96)02016-x](https://doi.org/10.1016/s0731-7085(96)02016-x) | [9278891](https://pubmed.ncbi.nlm.nih.gov/9278891) | The study reports PK/PD of imidapril (via its active metabolite imidaprilat) in rats, but the provided evidence contains only qualitative descriptions of concentration profiles without specific numeric parameter values (CL, V, etc.). |
| `Harder_1998.pdf` | Harder S et al., Single dose and steady state pharmacoki…, British journal of clinical… (1998) | pd | 5 | [10.1046/j.1365-2125.1998.t01-1-00694.x](https://doi.org/10.1046/j.1365-2125.1998.t01-1-00694.x) | [9578185](https://www.ncbi.nlm.nih.gov/pubmed/9578185) | metadata signals extractable PD data (concentrationeffect) |

<sub>queue written 2026-10-07T06:32:02.446597+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrassy_1991 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flomoxef, not imidapril. |
| PD | Breithaupt-Grögler_2001 | not_relevant | 3 | 2 | Reports numeric drug effects (BP reduction, PRA/TPR changes) after single doses via ANOVA, but no concentration-effect or dose-response analysis and no derivable PD parameters (Emax, EC50, slope, effect-vs-concentration curve). |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | The paper is a narrative review of cardiovascular pharmacotherapy and does not report quantitative pharmacokinetic parameters for imidapril. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | Narrative review of cardiovascular pharmacotherapy with no imidapril-specific PD or exposure/dose-response data or numeric PD parameters. |
| popPK | Cai_1998 | irrelevant | 0 | 0 | The study investigates cerebral blood flow autoregulation and hemodynamics, not the pharmacokinetic disposition parameters (CL, V, ka) of imidapril. |
| popPK | Fujii_1993 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Harder_1997 | irrelevant | 3 | 4 | A human interaction study reporting only non-compartmental exposure metrics (AUC, Cmax, tmax, urinary recovery) for imidapril/imidaprilat, with no clearance, volume, or population-PK model parameters; the ~19 h half-life is cited from literature without a volume. |
| popPK | Harder_1998 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PGx | He_2013 | not_relevant | 0 | 0 | The study explicitly reports no significant difference in drug response for imidapril among KCNH2 genotypes. |
| popPK | Higashino_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Hosoda_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Hosoya_2000 | irrelevant | 0 | 0 | The study investigates the cardioprotective effects of imidapril on myocardial ischemia-reperjury in dogs, reporting hemodynamic and contractile parameters (E(c), L(0)) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| PD | Hosoya_2000 | not_relevant | 2 | 1 | Animal ischemia-reperfusion study with fixed-dose imidaprilat infusion vs control; no concentration-effect or dose-response relationship or PD parameters (Emax/EC50 etc.) reported or derivable. |
| popPK | Ihara_1991 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Ishizuka_1997 | irrelevant | 0 | 0 | The study focuses on the biliary excretion mechanism of temocaprilat in rats, and imidapril is only mentioned as a comparator that did not affect transport. |
| popPK | Katoh_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/efficacy trial in mice measuring blood pressure and renal ACE activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | The paper is a neuroprotective compound screen in zebrafish and does not involve imidapril or its pharmacokinetics. |
| PD | Kim_2022 | not_relevant | 0 | 0 | This is a zebrafish phenotypic screening study for neuroprotective compounds; imidapril is not studied and no drug exposure-response or concentration-effect PD relationship with numeric parameters is reported. |
| popPK | Matsubara_2002 | irrelevant | 0 | 0 | The paper discusses drug interactions and toxicology of unrelated compounds (rilmazafone, 480156-S, flomoxef) and does not mention imidapril. |
| popPK | Meguro_1987 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Monteagudo_2018 | irrelevant | 0 | 0 | The paper is a dermatology case report regarding clindamycin hypersensitivity, and imidapril is only listed as a concomitant medication with no pharmacokinetic data. |
| popPK | Morimoto_1987 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of flomoxef, not imidapril. |
| popPK | Motohiro_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flomoxef, not imidapril. |
| PGx | Okamura_1999 | not_relevant | 2 | 0 | The study investigates the effect of ACE genotype on the clinical outcome (restenosis) of imidapril, not on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Phillips_2019 | irrelevant | 1 | 2 | This is an in vitro enzyme-inhibition study of purified human carboxylesterase (hCE1) using imidapril only as a probe substrate; it reports enzyme kinetics (Km, Vmax, IC50, Ki) but no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for imidapril. |
| PD | Phillips_2019 | not_relevant | 2 | 5 | This is an in vitro enzyme-inhibition study (IC50/Ki of OPEs against hCE1-mediated imidapril prodrug activation), i.e., a metabolic/PK interaction, not a pharmacodynamic exposure-response relationship for imidapril; while numeric Ki/IC50 values are stated, they describe inhibitor-enzyme binding rather than imidapril dose/concentration-effect PD. |
| popPK | Pinto_1996 | irrelevant | 0 | 0 | The study is a dose-finding trial focusing on hemodynamic effects and ACE inhibition, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for imidapril. |
| popPK | Sanders_2005 | irrelevant | 0 | 0 | The study is a mechanistic investigation of protein catabolism in muscle and cancer cachexia where imidapril is used only as a pharmacological tool to inhibit ACE, not as the subject of a pharmacokinetic analysis. |
| PD | Sanders_2005 | not_relevant | 2 | 1 | Imidapril appears only as a qualitative inhibitor/attenuator (in vitro imidaprilat, single-dose 30 mg/kg in vivo); the dose-response curves are for angiotensin I/II, not for imidapril, so no imidapril exposure-response or PD parameters are extractable. |
| popPK | Song_2002 | irrelevant | 2 | 0 | This is a review article that discusses imidapril qualitatively but does not provide specific quantitative pharmacokinetic parameter values (CL, V, ka, etc.) in the text. |
| PD | Song_2002 | not_relevant | 2 | 0 | Narrative review of ACE inhibitors; only qualitative statements (flat dose-response curves) with no numeric PD parameters for imidapril. |
| popPK | Sugaya_1992 | irrelevant | 1 | 0 | This is an in vitro enzyme-kinetics study reporting ACE inhibition constants (Ki, IC50) for imidapril's active metabolite 6366A, not pharmacokinetic disposition parameters (CL, V, ka, half-life, or a PK model); no PK values are present. |
| PD | Sugaya_1992 | not_relevant | 3 | 3 | In vitro ACE inhibition (Ki/IC50) for imidapril's active metabolite 6366A; no in-vivo exposure- or dose-response PD relationship. |
| popPK | Thoulon_2003 | irrelevant | 3 | 4 | This is a 90-day tolerance/toxicity study in cats with only toxicokinetic accumulation ratios (Cmax and AUC day-to-day ratios) for imidapril/imidaprilat; no clearance, volume, half-life, or PK model parameters are reported, though the ratio values themselves are present in the text. |
| PD | Thoulon_2003 | not_relevant | 1 | 0 | This is a 90-day tolerance/toxicity study in cats; PD is only mentioned qualitatively (0.5 mg/kg/day deemed pharmacodynamically effective) with no ACE activity, effect-vs-concentration data, or numeric PD parameters (Emax, EC50, etc.) reported or derivable. |
| popPK | Toutain_2004 | irrelevant | 2 | 0 | The paper is a mechanistic review discussing PK/PD concepts for ACE inhibitors without providing specific quantitative parameter values for imidapril. |
| popPK | Tsuruoka_2007 | relevant | 4 | 8 | The study reports dialyzer clearance (CL) and elimination fraction for imidaprilat (active metabolite) in humans, which are quantitative disposition parameters, though it lacks a full compartmental PK model (V, Q, ka). |
| popPK | Yamada_1992 | relevant | 9 | 2 | The study reports quantitative pharmacokinetic parameters (half-lives) for the active metabolite of imidapril in animals, but specific clearance or volume values are not present in the provided abstract text. |
| popPK | Yamada_1992_2 | relevant | 10 | 2 | The study reports quantitative PK parameters for imidapril in rats and dogs, but the specific numeric values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yamanaka_1996 | relevant | 8 | 0 | The study reports steady-state pharmacokinetics of imidaprilat (active metabolite) in rats, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yamanaka_1996_2 | irrelevant | 2 | 0 | The paper describes the development and validation of a radioimmunoassay method for imidapril and does not report quantitative pharmacokinetic parameters (CL, V, etc.) in the provided evidence. |
| popPK | Yamanaka_1997 | relevant | 8 | 2 | The study reports PK/PD of imidapril (via its active metabolite imidaprilat) in rats, but the provided evidence contains only qualitative descriptions of concentration profiles without specific numeric parameter values (CL, V, etc.). |
| popPK | Yamanaka_1997_2 | relevant | 9 | 2 | The study reports PK/PD of imidaprilat (active metabolite of imidapril) in rats, but specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Yang_2014 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methylphenidate, not imidapril. |
| PD | Yang_2014 | not_relevant | 0 | 0 | Paper is purely a PBPK (pharmacokinetic) model for methylphenidate; no pharmacodynamic or exposure-response relationships or PD parameters are reported. |
| popPK | Yanjiao_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of enzyme inhibition (CES1A1/CES2) using imidapril as a substrate, not a pharmacokinetic study reporting disposition parameters (CL, V, etc.) for imidapril. |
| popPK | Yoshimura_2008 | irrelevant | 0 | 0 | The study focuses on pharmacogenetics (CES1A2 polymorphisms) and in vitro transcriptional activity, reporting no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for imidapril. |
| popPK | Zhang_2014 | irrelevant | 0 | 0 | The study is an in-vitro enzyme inhibition assay measuring the effect of excipients on carboxylesterase activity, not a pharmacokinetic study reporting disposition parameters (CL, V, ka) for imidapril. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
