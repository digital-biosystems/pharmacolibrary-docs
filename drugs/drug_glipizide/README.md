<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glipizide&quot;}]"></div>

# glipizide

- **generic name:** glipizide
- **ATC codes:** `A10BB07`
- **DrugBank:** [DB01067](https://go.drugbank.com/drugs/DB01067) · **PubChem:** [CID 3478](https://pubchem.ncbi.nlm.nih.gov/compound/3478)
- **molar mass:** 445.535 g/mol (C21H27N5O4S) — DrugBank
- **groups:** approved, investigational

## About

Glipizide is a sulfonylurea blood-glucose-lowering medicine used to treat diabetes, including a rare inherited form called maturity-onset diabetes of the young type 2. It is an approved anti-diabetic medication, widely used for lowering blood sugar in people with diabetes.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3108899](https://www.wikidata.org/wiki/Q3108899) and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Dhawan_2006_reference](drugs/drug_glipizide/Glipizide_Dhawan2006_reference.md) | — | 1-compartment (no model) | 0 | Dhawan S et al., Bioavailability of immediate- and exten…, Clinical pharmacokinetics (2006) | [10.2165/00003088-200645030-00007](https://doi.org/10.2165/00003088-200645030-00007) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Barrett-Jolley_1998_K_ATP_current](drugs/drug_glipizide/pd_Barrett_Jolley_1998_K_ATP_current.md) | K ATP current ← glipizide · direct sigmoid Emax (Hill) effect | — | Barrett-Jolley R et al., Characterization of K(ATP) channels in…, British journal of pharmaco… (1998) | [10.1038/sj.bjp.0701727](https://doi.org/10.1038/sj.bjp.0701727) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lechuga_2001_F2_6BP](drugs/drug_glipizide/pd_Lechuga_2001_F2_6BP.md) | fructose 2,6-bisphosphate ← glipizide · direct Emax (saturable) effect | — | Lechuga CG et al., Decreased responsiveness of gluconeogen…, Life sciences (2001) | [10.1016/s0024-3205(01)00965-1](https://doi.org/10.1016/s0024-3205(01)00965-1) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Lechuga_2001_gluconeogenesis](drugs/drug_glipizide/pd_Lechuga_2001_gluconeogenesis.md) | rate of lactate conversion to glucose ← glipizide · direct Emax (saturable) effect | — | Lechuga CG et al., Decreased responsiveness of gluconeogen…, Life sciences (2001) | [10.1016/s0024-3205(01)00965-1](https://doi.org/10.1016/s0024-3205(01)00965-1) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=glipizide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | liver | `CYP2C9` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ABCC8 (inhibitor), KCNJ10 (blocker), PPARG (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 01:39 | 4:37 | 0/1/0 | 2/0/0 | 0/0/0 | 114,154/8,668 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 18 matched, 18 returned
- **screened:** 5  ·  **relevant:** 5
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Chen_1995.pdf` | Chen QC et al., [Pharmacokinetics and bioavailability o…, Yao xue xue bao = Acta phar… (1995) | popPK | 10 |  | [7572185](https://pubmed.ncbi.nlm.nih.gov/7572185) | The study reports quantitative PK parameters for glipizide in humans, but the specific numeric values are in Tables 2 and 3 which are not included in the provided evidence. |
| `Huupponen_1982.pdf` | Huupponen R et al., Glipizide pharmacokinetics and response…, International journal of cl… (1982) | popPK | 10 |  | [6754633](https://pubmed.ncbi.nlm.nih.gov/6754633) | The abstract explicitly reports quantitative pharmacokinetic parameters (half-life, Vd, clearance) for glipizide in humans. |
| `Pentikäinen_1983.pdf` | Pentikäinen PJ et al., Pharmacokinetics and pharmacodynamics o…, International journal of cl… (1983) | popPK | 10 |  | [6341263](https://pubmed.ncbi.nlm.nih.gov/6341263) | The abstract explicitly reports quantitative pharmacokinetic parameters for glipizide in humans, including clearance, volume of distribution, and half-life. |
| `Wåhlin-Boll_1982.pdf` | Wåhlin-Boll E et al., Bioavailability, pharmacokinetics and e…, Clinical pharmacokinetics (1982) | popPK | 9 | [10.2165/00003088-198207040-00006](https://doi.org/10.2165/00003088-198207040-00006) | [7116738](https://pubmed.ncbi.nlm.nih.gov/7116738) | The study reports quantitative PK parameters (Vd, t1/2, bioavailability) for glipizide in humans, though specific clearance values are not explicitly listed in the text. |
| `Dhawan_2006.pdf` | Dhawan S et al., Bioavailability of immediate- and exten…, Clinical pharmacokinetics (2006) | popPK | 8 | [10.2165/00003088-200645030-00007](https://doi.org/10.2165/00003088-200645030-00007) | [16509763](https://pubmed.ncbi.nlm.nih.gov/16509763) | The study reports quantitative PK parameters (Cmax, Tmax, AUC, MRT) for glipizide in humans using a two-compartment model, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text. |

<sub>queue written 2026-10-05 01:35 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett-Jolley_1998 | irrelevant | 0 | 0 | The study is an electrophysiological pharmacology investigation of K-ATP channels in rat skeletal muscle, not a pharmacokinetic study of glipizide. |
| popPK | Chen_1995 | relevant | 10 | 0 | The study reports quantitative PK parameters for glipizide in humans, but the specific numeric values are in Tables 2 and 3 which are not included in the provided evidence. |
| popPK | Dorsey-Trevino_2022 | irrelevant | 0 | 0 | The study uses glipizide as a pharmacologic challenge to measure insulin response, not to characterize glipizide's pharmacokinetic parameters. |
| popPK | Fan_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment where glipizide is used as a pharmacological tool to block K(ATP) channels, not a pharmacokinetic study of glipizide. |
| PD | Fan_2007 | not_relevant | 0 | 0 | The paper studies the pharmacology of acetylcholine (ACh) and uses glipizide only as a qualitative tool to block K_ATP channels; it does not report a dose-response or exposure-response relationship for glipizide itself. |
| popPK | González_2001 | irrelevant | 0 | 0 | The study is an in-vitro binding assay of glibenclamide in mouse brain membranes, not a pharmacokinetic study of glipizide. |
| PD | González_2001 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding kinetics (KD, Bmax) for glibenclamide and glipizide, not in vivo pharmacodynamic exposure-response or dose-response relationships for glipizide. |
| popPK | Jiang_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nitric oxide in guinea pig arteries where glipizide is used only as a pharmacological tool to block K-ATP channels, not as the subject of a pharmacokinetic analysis. |
| PD | Jiang_2004 | not_relevant | 0 | 0 | The paper reports an EC50 for nitric oxide (NO) on K(ATP) channels, not for glipizide; glipizide is used only as a control agent with a single qualitative/numeric effect measurement, lacking a dose-response curve or PD model for the drug itself. |
| popPK | Kim_2022 | relevant | 10 | 0 | The study is relevant but the specific numeric pharmacokinetic parameter values are not present in the provided text extract. |
| popPK | Lechuga_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gluconeogenesis in rat hepatocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Nielsen-Kudsk_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular smooth muscle relaxation, not a pharmacokinetic study reporting disposition parameters. |
| popPK | OMeara_1990 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of glyburide on beta-cell function, with glipizide mentioned only as a comparator, and no pharmacokinetic parameters for glipizide are reported. |
| popPK | Prendergast_1984 | irrelevant | 2 | 0 | This is a review article that summarizes general pharmacokinetic properties (e.g., half-life range) but does not report original quantitative disposition parameters (CL, V, Q, ka) or a specific population PK model with numeric values. |
| popPK | Ronner_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and binding assay of a different drug (AZ-DF-265) on rat pancreatic cells, with glipizide mentioned only as a comparator for partition coefficients and channel inhibition, not as a subject of PK analysis. |
| PD | Ronner_1992 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of (-)-AZ-DF-265, not glipizide; glipizide is only mentioned as a reference for partition coefficients. |
| popPK | Si_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of guinea pig spiral modiolar arteries where glipizide is used solely as a pharmacological blocker of K(ATP) channels, not as the subject of pharmacokinetic analysis. |
| PD | Si_2002 | not_relevant | 0 | 0 | The paper reports an EC50 for the NO donor DPTA-NONOate and pinacidil, but glipizide is used only as a qualitative blocker to identify the channel type, with no dose-response curve or numeric PD parameters reported for glipizide itself. |
| popPK | Steinberg_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of pinacidil in canine tissues where glipizide is used only as a comparative antagonist, with no pharmacokinetic parameters reported. |
| PD | Steinberg_1991 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50) for pinacidil and its isomers, and qualitatively describes antagonism by glipizide, but does not provide numeric PD parameters or a quantitative exposure-response relationship for glipizide itself. |
| popPK | Yeung_2002 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of potassium channel modulation in mouse ileum, not a pharmacokinetic study of glipizide. |
| PD | Yeung_2002 | not_relevant | 0 | 0 | The paper investigates the antagonistic effect of glipizide on potassium channel openers in an in-vitro mouse ileum preparation, not the pharmacodynamic exposure-response relationship of glipizide itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bglipizide%5D&body=Drug%3A%20glipizide%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_glipizide/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-05 01:35 UTC</sub>
