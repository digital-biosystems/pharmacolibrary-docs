<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;minaprine&quot;}]"></div>

# minaprine

- **generic name:** minaprine
- **ATC codes:** `N06AX07`
- **DrugBank:** [DB00805](https://go.drugbank.com/drugs/DB00805) · **PubChem:** [CID 4199](https://pubchem.ncbi.nlm.nih.gov/compound/4199)
- **molar mass:** 298.3828 g/mol (C17H22N4O) — DrugBank
- **groups:** approved

## About

Minaprine is an antidepressant used to treat depression. It is classified as an approved other antidepressant, but it is not widely used today and no European Union authorisation is recorded.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6863173](https://www.wikidata.org/wiki/Q6863173) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=minaprine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `MAOA` inhibitor | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor | DrugBank actor |
| — | blood | `ACHE` inhibitor | DrugBank actor |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | neuromuscular junction | `ACHE` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CHRM1 (target), DRD1 (target), DRD2 (target), HTR2A (target), HTR2B (target), HTR2C (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:40 | 0:27 | 0/0/0 | 0/0/0 | 0/0/0 | 10,039/788 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 23 matched, 23 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Davi_1992.pdf` | Davi H et al., Disposition of minaprine in animals and…, Xenobiotica; the fate of fo… (1992) | popPK | 7 | [10.3109/00498259209046615](https://doi.org/10.3109/00498259209046615) | [1632106](https://pubmed.ncbi.nlm.nih.gov/1632106) | Original disposition study of 14C-minaprine with Cmax, AUC, t1/2 beta and excretion values reported in the abstract, though full CL/V parameters may be in the paper body. |
| `Du_2006.pdf` | Du HZ et al., 3-Benzidino-6(4-chlorophenyl) pyridazin…, Neuroscience letters (2006) | pd | 4 | [10.1016/j.neulet.2006.03.067](https://doi.org/10.1016/j.neulet.2006.03.067) | [16647816](https://www.ncbi.nlm.nih.gov/pubmed/16647816) | metadata signals extractable PD data (IC50) |
| `Garattini_1984.pdf` | Garattini S et al., Neurochemical effects of minaprine, a n…, Psychopharmacology (1984) | pd | 4 | [10.1007/BF00427775](https://doi.org/10.1007/BF00427775) | [6425901](https://www.ncbi.nlm.nih.gov/pubmed/6425901) | metadata signals extractable PD data (IC50) |
| `Haji-Momenian_2003.pdf` | Haji-Momenian S et al., Comparative molecular field analysis an…, Bioorganic & medicinal chem… (2003) | pgx | 7 | [10.1016/s0968-0896(03)00525-x](https://doi.org/10.1016/s0968-0896(03)00525-x) | [14642599](https://www.ncbi.nlm.nih.gov/pubmed/14642599) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |

<sub>queue written 2026-10-06T23:40:35.493424+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allain_1996 | irrelevant | 0 | 0 | The paper is a clinical efficacy study focusing on memory outcomes and does not report any pharmacokinetic parameters for minaprine. |
| PD | Allain_1996 | not_relevant | 1 | 0 | The paper reports a clinical trial with a single fixed dose (200 mg/d) and provides only statistical p-values for clinical endpoints, lacking any exposure-response modeling, concentration-effect data, or numeric PD parameters like Emax or EC50. |
| popPK | Cailleux_1982 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PGx | Chico_2009 | not_relevant | 3 | 2 | Paper discusses CYP2D6 substrate status of minaprine via structural analogs, but does not report gene variant/genotype effects on PK/PD parameters in patients. |
| popPK | Contreras_1999 | irrelevant | 0 | 0 | The paper is a mechanistic study on acetylcholinesterase inhibition (IC50 values) and does not report any pharmacokinetic parameters for minaprine. |
| PD | Contreras_1999 | not_relevant | 3 | 2 | The text reports a single in vitro IC50 value for minaprine as part of a structure-activity relationship study, but does not provide an exposure-response curve, dose-response analysis, or PK/PD model with derivable PD parameters like Emax or slope. |
| popPK | Davi_1985 | irrelevant | 2 | 1 | Qualitative metabolite identification study in baboons with no quantitative PK parameters (CL, V, half-life) reported in the evidence. |
| PD | Davi_1992 | not_relevant | 2 | 1 | The paper reports PK parameters and a qualitative observation of seizures in dogs at a specific dose, but it does not provide a quantitative concentration-effect relationship, dose-response curve, or numeric PD parameters (e.g., EC50, Emax) for minaprine. |
| popPK | Du_2006 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| PD | Du_2006 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of a different compound (3-Benzidino-6(4-chlorophenyl) pyridazine) on rat neurons and does not mention minaprine or report any pharmacodynamic parameters for it. |
| popPK | Garattini_1984 | irrelevant | 0 | 0 | The study focuses on neurochemical effects (acetylcholine content, enzyme activity) rather than quantitative pharmacokinetic parameters like clearance or volume of distribution. |
| PGx | Haji-Momenian_2003 | not_relevant | 3 | 2 | Minaprine is only a template ligand for CYP2D6 CoMFA modeling; no gene variant/genotype effect on its PK/PD parameters is reported. |
| popPK | Harel-Dupas_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor interactions in synaptosomes and does not report any pharmacokinetic parameters for minaprine. |
| popPK | Jouglard_1996 | irrelevant | 0 | 0 | The paper is a toxicology/epidemiological study on the severity of minaprine intoxication and does not report any pharmacokinetic parameters. |
| PD | Jouglard_1996 | not_relevant | 1 | 0 | The paper reports a qualitative association between increased dosage and increased severity (seizures/death) based on poison control data, but provides no numeric PD parameters, concentration-effect curves, or dose-response modeling. |
| popPK | Kinirons_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of psychomotor performance and cardiovascular effects, reporting no pharmacokinetic parameters for minaprine. |
| PD | Kinirons_1993 | not_relevant | 2 | 1 | The study reports qualitative psychomotor effects of a single fixed dose compared to placebo and control, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Lorenzini_1993 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study investigating the nootropic effects of minaprine in rats and does not report any pharmacokinetic parameters. |
| PD | Lorenzini_1993 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response effect (5, 10, 25 mg/kg) on behavioral outcomes but does not provide numeric PD parameters (e.g., EC50, Emax) or a fitted concentration-effect curve. |
| popPK | Montgomery_1991 | irrelevant | 0 | 0 | This is a clinical efficacy/dose-response trial of minaprine in depression with no pharmacokinetic parameters reported. |
| PD | Montgomery_1991 | not_relevant | 3 | 1 | The paper reports a clinical dose-response comparison (200mg vs 300mg) but lacks exposure data (plasma concentrations) and does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect model. |
| popPK | Muramatsu_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor binding and neurotransmitter release, not a pharmacokinetic study reporting disposition parameters for minaprine. |
| PD | Muramatsu_1990 | not_relevant | 3 | 2 | The paper reports in vitro binding IC50s and qualitative attenuation of neurotransmitter release, but does not provide a pharmacodynamic exposure-response model or numeric PD parameters (e.g., Emax, EC50 for effect) for minaprine itself. |
| popPK | Nguyen_2025 | irrelevant | 0 | 0 | Minaprine is only mentioned as a candidate therapeutic agent in a bioinformatics/review analysis; no PK parameters for minaprine are reported. |
| popPK | Schumacher_1989 | irrelevant | 0 | 0 | The paper focuses on the pharmacological characterization of SR 95639A, a minaprine analogue, and does not report pharmacokinetic parameters for minaprine. |
| PD | Schumacher_1989 | not_relevant | 0 | 0 | The paper characterizes a different compound (SR 95639A) and does not report pharmacodynamic or exposure-response data for minaprine. |
| popPK | Wermuth_1993 | irrelevant | 0 | 0 | The paper is a medicinal chemistry review focusing on the synthesis and structure-activity relationships of minaprine analogues, reporting no quantitative pharmacokinetic parameters. |
| PD | Wermuth_1993 | not_relevant | 1 | 1 | The text provides an in vitro IC50 value for receptor binding but does not report an in vivo pharmacodynamic, exposure-response, or dose-response relationship with numeric PD parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
