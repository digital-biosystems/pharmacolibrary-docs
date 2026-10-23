<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08E&quot;,&quot;href&quot;:&quot;atc/C08E.md&quot;},{&quot;label&quot;:&quot;bepridil&quot;}]"></div>

# bepridil

- **generic name:** bepridil
- **ATC codes:** `C08EA02`
- **DrugBank:** [DB01244](https://go.drugbank.com/drugs/DB01244) · **PubChem:** [CID 2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351)
- **molar mass:** 366.5396 g/mol (C24H34N2O) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Bepridil is a calcium channel blocker that was used to treat angina pectoris and arterial hypertension. It has been withdrawn from the market, reportedly because of safety concerns, and is no longer in general clinical use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4890934](https://www.wikidata.org/wiki/Q4890934) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| bepridil | parent | 366.54 | C24H34N2O | DrugBank | [2351](https://pubchem.ncbi.nlm.nih.gov/compound/2351) | Nielsen-Kudsk_1988, Taguchi_2006 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rabbit" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Nielsen-Kudsk_1988_reference](drugs/drug_bepridil/Bepridil_NielsenKudsk1988_reference.md) | — | 1-compartment (no model) | 2 | Nielsen-Kudsk F et al., Bepridil, myocardial accumulation kinet…, Pharmacology & toxicology (1988) | [10.1111/j.1600-0773.1988.tb00923.x](https://doi.org/10.1111/j.1600-0773.1988.tb00923.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Taguchi_2006_reference](drugs/drug_bepridil/Bepridil_Taguchi2006_reference.md) | — | 1-compartment (no model) | 1 | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Taguchi_2006](drugs/drug_bepridil/pgx_Taguchi_2006_CYP2D6_Q27.md) | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP3A5** | `Q27` · CL/F | metabolism | [Taguchi_2006](drugs/drug_bepridil/pgx_Taguchi_2006_CYP3A5_Q27.md) | Taguchi M et al., Nonlinear mixed effects model analysis…, Biological & pharmaceutical… (2006) | [10.1248/bpb.29.517](https://doi.org/10.1248/bpb.29.517) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bepridil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/metabolism/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP2D6` inhibitor/metabolism/substrate, `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` metabolism | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), CACNA1A (inhibitor), CACNA1H (inhibitor), CACNA2D2 (inhibitor), CALM1 (binder), KCNH2 (inhibitor), KCNQ1 (inhibitor), PDE1A (inhibitor), PDE1B (inhibitor), TNNC1 (other).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:58 | 14:04 | 0/2/0 | 0/0/0 | 0/0/2 | 141,465/19,810 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 3/1 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 122 matched, 65 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs review 0  ·  rejected 2  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lesko_1986.pdf` | Lesko LJ et al., Pharmacokinetics of intravenous bepridi…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600751008](https://doi.org/10.1002/jps.2600751008) | [3491897](https://pubmed.ncbi.nlm.nih.gov/3491897) | The study reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for bepridil in humans with values explicitly listed in the text. |
| `Shiga_2013.pdf` | Shiga T et al., Contributing factors to the apparent cl…, Therapeutic drug monitoring (2013) | popPK | 10 | [10.1097/FTD.0b013e318286ec33](https://doi.org/10.1097/FTD.0b013e318286ec33) | [23666576](https://pubmed.ncbi.nlm.nih.gov/23666576) | The paper describes a population PK study of bepridil in humans, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract or evidence text. |
| `Nielsen-Kudsk_1988.pdf` | Nielsen-Kudsk F et al., Bepridil, myocardial accumulation kinet…, Pharmacology & toxicology (1988) | popPK | 8 | [10.1111/j.1600-0773.1988.tb00923.x](https://doi.org/10.1111/j.1600-0773.1988.tb00923.x) | [3263633](https://pubmed.ncbi.nlm.nih.gov/3263633) | The study reports quantitative two-compartment kinetic parameters (half-lives, distribution times, steady-state concentrations) for bepridil in the isolated rabbit heart. |

<sub>queue written 2026-10-07 04:51 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper discusses bepridil only as a potential inhibitor of acid sphingomyelinase in the context of SARS-CoV-2 entry via molecular docking, with no mention of pharmacogenomics or PK/PD parameters. |
| popPK | Batra_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug effects on cell proliferation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Calabresi_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of bepridil's mechanism of action on neuronal depolarization, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Cao_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of SARS-CoV-2 main protease inhibition where bepridil is used only as a repurposed drug probe, with no pharmacokinetic parameters reported. |
| popPK | Choi_2011 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ginsenoside Rg(3) on hERG channels, using bepridil only as a comparator antagonist, and reports no pharmacokinetic parameters. |
| popPK | Chouabe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel blocking (EC50) and does not report pharmacokinetic disposition parameters. |
| popPK | Chouabe_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology assay measuring channel blocking potency (EC50), not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Doki_2015 | not_relevant | 0 | 0 | The paper reports pharmacogenomic effects on flecainide metabolism, not bepridil. |
| PGx | Fung_2000 | not_relevant | 0 | 0 | The paper is a review of amprenavir and only mentions bepridil as a contraindicated drug due to CYP3A4 interactions, without reporting any pharmacogenomic effects on bepridil's PK or PD parameters. |
| popPK | Hugtenburg_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium antagonists on cardiac contractility, not a pharmacokinetic study. |
| popPK | Jy_1987 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium fluxes in platelets where bepridil is used only as a pharmacological inhibitor, not as the subject of pharmacokinetic analysis. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (CYP1A2 inhibition) and does not report any pharmacogenomic effects (gene variants) on bepridil's PK or PD parameters. |
| popPK | Larsson_2002 | irrelevant | 0 | 0 | The study investigates vitamin D effects on calcium channels in Atlantic cod enterocytes, using bepridil only as a pharmacological tool to block Na+/Ca2+ exchange, not as the subject of a pharmacokinetic analysis. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving cisapride and mentions bepridil only as a contraindicated co-medication due to QT prolongation risk, without reporting any pharmacogenomic effects on bepridil's PK or PD parameters. |
| popPK | Nebrisi_2018 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of curcumin on nicotinic receptors where bepridil is used only as a non-specific calcium channel antagonist control, not as the subject drug for PK analysis. |
| popPK | Shiga_2013 | relevant | 10 | 0 | The paper describes a population PK study of bepridil in humans, but the specific numeric parameter values (e.g., mean CL/F, V/F) are not present in the provided abstract or evidence text. |
| popPK | Vatansever_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of anti-viral activity and does not report pharmacokinetic parameters. |
| popPK | Wang_1999 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ion channel inhibition, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wang_2021 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and molecular docking investigation of bepridil's effect on TREK-1 channels, reporting IC50 values for channel blockade rather than pharmacokinetic disposition parameters (CL, V, ka, t1/2). |
| popPK | Watanabe_2001 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of bepridil's mechanism of action on ion channels, not a pharmacokinetic study. |
| popPK | Zhu_1993 | irrelevant | 2 | 0 | The study is an in-vitro pharmacodynamic/mechanistic study on guinea pig atrium that simulates PK parameters rather than measuring quantitative disposition parameters (CL, V, etc.) for bepridil. |
| popPK | de_2007 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of myofilament calcium sensitivity using rabbit myofibrils, not a pharmacokinetic study of bepridil. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbepridil%5D&body=Drug%3A%20bepridil%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_bepridil/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 04:51 UTC</sub>
