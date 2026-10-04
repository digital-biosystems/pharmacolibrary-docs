<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;imidapril&quot;}]"></div>

# imidapril

- **generic name:** imidapril
- **ATC codes:** `C09AA16`
- **DrugBank:** [DB11783](https://go.drugbank.com/drugs/DB11783) · **PubChem:** [CID 5464343](https://pubchem.ncbi.nlm.nih.gov/compound/5464343)
- **molar mass:** 405.4449 g/mol (C20H27N3O6) — DrugBank
- **groups:** investigational

## About

**Description.** Imidapril has been investigated for the treatment of Kidney, Polycystic, Autosomal Dominant.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:24 | 2:49 | 0/0/0 | 1/1/0 | 0/0/1 | 93,630/10,560 | ollama / glm-5.3-flash | 11 | 11/4 | 2/9 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Phillips_2019_hCE1_mediated_imidapril_activation](drugs/drug_imidapril/pd_Phillips_2019_hCE1_mediated_imidapril_activation.md) | hCE1-mediated imidapril activation ← TPHP · direct Emax (saturable) effect | — | Phillips AL et al., Inhibition of Human Liver Carboxylester…, Toxicological sciences : an… (2019) | [10.1093/toxsci/kfz149](https://doi.org/10.1093/toxsci/kfz149) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Harder_1997_ACE](drugs/drug_imidapril/pd_Harder_1997_ACE.md) | plasma ACE activity ← imidaprilat · direct Emax (saturable) effect | — | Harder S et al., Pharmacokinetic and pharmacodynamic int…, British journal of clinical… (1997) | [10.1046/j.1365-2125.1997.00588.x](https://doi.org/10.1046/j.1365-2125.1997.00588.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ACE2** | `Q320` · Emax | target | [Chen_2016](drugs/drug_imidapril/pgx_Chen_2016_ACE2_Q320.md) | Chen YY et al., Impact of ACE2 gene polymorphism on ant…, Journal of human hypertensi… (2016) | [10.1038/jhh.2016.24](https://doi.org/10.1038/jhh.2016.24) |

<details class="pk-legend"><summary>What the PGx badges mean — evidence, and whether a model runs</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>the paper gives the effect of each phenotype (or genotype) on a named model parameter — a θ per category.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>the effect comes from a CPIC / DPWG dosing guideline, not from this paper's numbers.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>a risk allele for an adverse reaction (an HLA type, G6PD deficiency …): it changes no PK/PD parameter.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>the paper's popPK model runs per phenotype in the browser (Simulation tab); its PGx Modelica model is under Models.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>a PGx Modelica model exists but has no in-browser simulator.</td></tr></tbody></table></details>

<details class="legend">
<summary>What the PGx columns mean</summary>
<table><thead><tr><th>column</th><th>what it holds</th></tr></thead><tbody><tr><td><code>gene</code></td><td>the gene whose variants the record is about. One record per gene, so a paper reporting several genes appears on several rows.</td></tr><tr><td><code>affects</code></td><td>the PK or PD parameter the genotype SHIFTS, as an ontology Q-code plus its name — Q22 = clearance, Q27 = CL/F (apparent clearance), Q32 = Cmax, Q88 = AUC, Q40 = Fab, Q321 = EC50, Q322 = IC50, Q305 = kfm. The record's per-phenotype theta is a multiplier ON that parameter: a poor-metaboliser theta shifts this value, it does not supply one. Two values are NOT parameters — Q100 (NIL) is an association or risk finding with no parameter target, and `safety` is an adverse-reaction risk such as an HLA allele. A PA… id instead of a Q-code marks a record derived from a ClinPGx/PharmGKB guideline lookup rather than read out of the paper.</td></tr><tr><td><code>mechanism</code></td><td>how the gene acts: metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>the paper stem, linking to the full record page.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>the field is absent from the KB artifact — nothing was recorded. This is NOT the same as zero or empty: the value is unknown, not measured to be nothing.</td></tr><tr><td><code>—</code></td><td>deliberately not shown: the column does not apply to this row.</td></tr><tr><td><code>not verified</code></td><td>the record is not in an accepted state (see the badge and the note above the table); the numbers are shown as extracted, not endorsed.</td></tr></tbody></table>
</details>

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=imidapril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: ACE (modulator), ACE2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 48 matched, 57 returned
- **screened:** 12  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_4 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yamada_1992.pdf` | Yamada Y et al., Metabolic fate of the new angiotensin-c…, Arzneimittel-Forschung (1992) | popPK | 6 | not captured | [1642673](https://pubmed.ncbi.nlm.nih.gov/1642673) | Animal PK study of imidapril reporting half-lives (e.g., M1 0.9–2.3 h rats, 6.3–9.3 h dogs), but no CL/V or compartmental parameters and no full numeric table in the evidence. |
| `Yamada_1992_2.pdf` | Yamada Y et al., Metabolic fate of the new angiotensin-c…, Arzneimittel-Forschung (1992) | popPK | 6 | not captured | [1642668](https://pubmed.ncbi.nlm.nih.gov/1642668) | Animal PK study of imidapril as subject drug, but the evidence (abstract only) contains absorption fractions and timing, not numeric CL/V/compartmental parameters, which may be in tables not provided. |
| `Harder_1998.pdf` | Harder S et al., Single dose and steady state pharmacoki…, British journal of clinical… (1998) | pd | 5 | [10.1046/j.1365-2125.1998.t01-1-00694.x](https://doi.org/10.1046/j.1365-2125.1998.t01-1-00694.x) | [9578185](https://www.ncbi.nlm.nih.gov/pubmed/9578185) | metadata signals extractable PD data (concentrationeffect) |
| `Yamanaka_1997.pdf` | Yamanaka K et al., Pharmacokinetics and pharmacodynamics o…, Journal of pharmaceutical a… (1997) | pd | 5 | [10.1016/s0731-7085(96)02016-x](https://doi.org/10.1016/s0731-7085(96)02016-x) | [9278891](https://www.ncbi.nlm.nih.gov/pubmed/9278891) | metadata signals extractable PD data (PK/PD) |

<sub>queue written 2026-09-30T23:24:41.905951+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andrassy_1991 | irrelevant | 0 | 0 | The paper concerns flomoxef, not imidapril, and no PK parameters for imidapril appear. |
| PD | Breithaupt-Grögler_2001 | not_relevant | 3 | 2 | Reports numeric drug effects (BP reduction, PRA/TPR changes) after single doses via ANOVA, but no concentration-effect or dose-response analysis and no derivable PD parameters (Emax, EC50, slope, effect-vs-concentration curve). |
| popPK | Cabré_2026 | irrelevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no imidapril PK parameters or numeric disposition data. |
| PD | Cabré_2026 | not_relevant | 1 | 0 | Narrative review of cardiovascular pharmacotherapy with no imidapril-specific PD or exposure/dose-response data or numeric PD parameters. |
| popPK | Cai_1998 | irrelevant | 0 | 0 | This is a pharmacodynamic study of cerebral blood flow autoregulation in rats; no PK parameters (CL, V, ka, half-life, or PK model) for imidapril are reported. |
| popPK | Fujii_1993 | irrelevant | 0 | 0 | The paper reports PK parameters for flomoxef, not imidapril, so no imidapril disposition values are present. |
| popPK | Harder_1997 | irrelevant | 3 | 4 | A human interaction study reporting only non-compartmental exposure metrics (AUC, Cmax, tmax, urinary recovery) for imidapril/imidaprilat, with no clearance, volume, or population-PK model parameters; the ~19 h half-life is cited from literature without a volume. |
| popPK | Harder_1998 | irrelevant | 0 | 0 | no_text gate: only 122 chars of text extracted (&lt; 400) |
| PGx | He_2013 | not_relevant | 3 | 2 | For imidapril the paper explicitly reports no significant genotype effect on blood pressure response; pharmacogenomic effects are only for CCBs and alpha/beta-blockers. |
| popPK | Higashino_1987 | irrelevant | 0 | 0 | The paper concerns flomoxef, not imidapril; no imidapril PK parameters are present. |
| popPK | Hoogkamer_1997 | relevant | 6 | 1 | PK study of imidapril in liver-impaired patients, but evidence contains only abstract text with Cmax/AUC mentioned qualitatively and no numeric parameter values provided. |
| popPK | Hoogkamer_1998 | relevant | 6 | 2 | A PK study of imidapril/imidaprilat in renal failure, but the evidence contains only Cmax/AUC comparisons, no numeric disposition parameters (CL, V, t½) which likely reside in tables/figures not provided. |
| popPK | Hosoda_1987 | irrelevant | 0 | 0 | The paper reports PK parameters for flomoxef, not imidapril. |
| popPK | Hosoya_2000 | irrelevant | 0 | 0 | This is a canine cardioprotection study with imidaprilat only as an infused intervention; no PK parameters (CL, V, ka, half-life, or PK model) are reported. |
| PD | Hosoya_2000 | not_relevant | 2 | 1 | Animal ischemia-reperfusion study with fixed-dose imidaprilat infusion vs control; no concentration-effect or dose-response relationship or PD parameters (Emax/EC50 etc.) reported or derivable. |
| popPK | Ihara_1991 | irrelevant | 0 | 0 | The paper concerns flomoxef in neonates, not imidapril, and no imidapril PK parameters appear. |
| popPK | Ishizuka_1997 | irrelevant | 0 | 0 | The study concerns temocaprilat biliary excretion; imidapril is only mentioned as a non-inhibiting comparator with no PK parameters reported. |
| popPK | Katoh_2000 | irrelevant | 1 | 0 | This is a pharmacodynamic study of imidapril in diabetic mice with no PK parameters (CL, V, ka, half-life, or model) reported. |
| popPK | Kim_2022 | irrelevant | 0 | 0 | This is a zebrafish neuroprotection screening study with no imidapril PK data; olmesartan is mentioned only as a screened compound, not imidapril. |
| PD | Kim_2022 | not_relevant | 0 | 0 | This is a zebrafish phenotypic screening study for neuroprotective compounds; imidapril is not studied and no drug exposure-response or concentration-effect PD relationship with numeric parameters is reported. |
| popPK | Matsubara_2002 | irrelevant | 0 | 0 | The paper concerns other drugs (450191-S, 480156-S, cephem antibiotics); imidapril is not mentioned and no PK parameters for it appear. |
| popPK | Meguro_1987 | irrelevant | 0 | 0 | The paper concerns flomoxef, not imidapril; no imidapril PK parameters are present. |
| PGx | Merali_2014 | not_relevant | 2 | 1 | Imidapril is only mentioned as a CES1 substrate; no gene variant effect on its PK/PD parameters is reported. |
| popPK | Monteagudo_2018 | irrelevant | 0 | 0 | This is a dermatology case report about clindamycin hypersensitivity; imidapril is only mentioned as a concomitant medication with no PK parameters. |
| popPK | Morimoto_1987 | irrelevant | 0 | 0 | The paper concerns flomoxef, not imidapril; no imidapril PK parameters are reported. |
| popPK | Motohiro_1987 | irrelevant | 0 | 0 | The paper concerns flomoxef, not imidapril; no imidapril PK parameters are reported. |
| PGx | Okamura_1999 | not_relevant | 2 | 3 | The paper examines whether ACE I/D genotype modifies the clinical effect of imidapril on restenosis after PTCA, not a PK or PD parameter of the drug. |
| popPK | Phillips_2019 | irrelevant | 1 | 2 | This is an in vitro enzyme-inhibition study of purified human carboxylesterase (hCE1) using imidapril only as a probe substrate; it reports enzyme kinetics (Km, Vmax, IC50, Ki) but no pharmacokinetic disposition parameters (CL, V, ka, half-life, or PK model) for imidapril. |
| PD | Phillips_2019 | not_relevant | 2 | 5 | This is an in vitro enzyme-inhibition study (IC50/Ki of OPEs against hCE1-mediated imidapril prodrug activation), i.e., a metabolic/PK interaction, not a pharmacodynamic exposure-response relationship for imidapril; while numeric Ki/IC50 values are stated, they describe inhibitor-enzyme binding rather than imidapril dose/concentration-effect PD. |
| popPK | Pinto_1996 | irrelevant | 2 | 0 | This is a haemodynamic dose-finding study with no PK parameters (no CL, V, ka, half-life, or PK model) reported for imidapril. |
| popPK | Sanders_2005 | irrelevant | 0 | 0 | This is an in-vitro/mechanistic cancer cachexia study using imidapril only as a co-incubation tool and anticachectic treatment; no PK parameters (CL, V, ka, half-life, or PK model) for imidapril are reported. |
| PD | Sanders_2005 | not_relevant | 2 | 1 | Imidapril appears only as a qualitative inhibitor/attenuator (in vitro imidaprilat, single-dose 30 mg/kg in vivo); the dose-response curves are for angiotensin I/II, not for imidapril, so no imidapril exposure-response or PD parameters are extractable. |
| popPK | Song_2002 | irrelevant | 4 | 0 | This is a narrative review of ACE inhibitors including imidapril, with no numeric PK parameters (CL, V, t½, ka) present in the evidence. |
| PD | Song_2002 | not_relevant | 2 | 0 | Narrative review of ACE inhibitors; only qualitative statements (flat dose-response curves) with no numeric PD parameters for imidapril. |
| popPK | Sugaya_1992 | irrelevant | 1 | 0 | This is an in vitro enzyme-kinetics study reporting ACE inhibition constants (Ki, IC50) for imidapril's active metabolite 6366A, not pharmacokinetic disposition parameters (CL, V, ka, half-life, or a PK model); no PK values are present. |
| PD | Sugaya_1992 | not_relevant | 3 | 3 | In vitro ACE inhibition (Ki/IC50) for imidapril's active metabolite 6366A; no in-vivo exposure- or dose-response PD relationship. |
| popPK | Thoulon_2003 | irrelevant | 3 | 4 | This is a 90-day tolerance/toxicity study in cats with only toxicokinetic accumulation ratios (Cmax and AUC day-to-day ratios) for imidapril/imidaprilat; no clearance, volume, half-life, or PK model parameters are reported, though the ratio values themselves are present in the text. |
| PD | Thoulon_2003 | not_relevant | 1 | 0 | This is a 90-day tolerance/toxicity study in cats; PD is only mentioned qualitatively (0.5 mg/kg/day deemed pharmacodynamically effective) with no ACE activity, effect-vs-concentration data, or numeric PD parameters (Emax, EC50, etc.) reported or derivable. |
| popPK | Toutain_2004 | irrelevant | 3 | 0 | A review-style discussion of ACE inhibitor PK/PD concepts with no numeric disposition parameters for imidapril present in the evidence. |
| popPK | Yamada_1992 | relevant | 6 | 4 | Animal PK study of imidapril reporting half-lives (e.g., M1 0.9–2.3 h rats, 6.3–9.3 h dogs), but no CL/V or compartmental parameters and no full numeric table in the evidence. |
| popPK | Yamada_1992_2 | relevant | 6 | 3 | Animal PK study of imidapril as subject drug, but the evidence (abstract only) contains absorption fractions and timing, not numeric CL/V/compartmental parameters, which may be in tables not provided. |
| popPK | Yamanaka_1996 | irrelevant | 3 | 1 | This is a PK/PD steady-state infusion study in rats, but no quantitative disposition parameters (CL, V, half-life, or model values) for imidapril/imidaprilat appear in the evidence. |
| popPK | Yamanaka_1996_2 | irrelevant | 2 | 1 | This is an analytical assay validation paper (RIA method) with no PK parameter values reported; it only mentions applicability to pharmacokinetic studies. |
| popPK | Yamanaka_1997 | irrelevant | 4 | 1 | PK/PD study of imidapril in rats, but the evidence contains no numeric disposition parameters (CL, V, half-life) — values would be in figures/tables not provided. |
| popPK | Yamanaka_1997_2 | irrelevant | 4 | 1 | PK/PD study of imidaprilat in rats, but no numeric disposition parameters (CL, V, t½) are present in the evidence. |
| popPK | Yang_2014 | irrelevant | 0 | 0 | The paper is a PBPK model for methylphenidate, not imidapril; no imidapril parameters appear anywhere. |
| PD | Yang_2014 | not_relevant | 0 | 0 | Paper is purely a PBPK (pharmacokinetic) model for methylphenidate; no pharmacodynamic or exposure-response relationships or PD parameters are reported. |
| popPK | Yanjiao_2013 | irrelevant | 2 | 1 | In-vitro enzyme inhibition study using imidapril only as a substrate; no PK disposition parameters (CL, V, t½, ka) for imidapril are reported. |
| popPK | Yoshimura_2008 | irrelevant | 2 | 0 | Pharmacogenetic study of CES1 promoter polymorphisms with no PK parameters for imidapril reported. |
| popPK | Zhang_2014 | irrelevant | 1 | 1 | In-vitro enzyme inhibition study using imidapril only as a CES substrate; no PK disposition parameters (CL, V, ka, half-life, or population-PK model) for imidapril are reported. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
