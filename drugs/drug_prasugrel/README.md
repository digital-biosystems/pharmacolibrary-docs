<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;prasugrel&quot;}]"></div>

# prasugrel

- **generic name:** prasugrel
- **ATC codes:** `B01AC22`
- **DrugBank:** [DB06209](https://go.drugbank.com/drugs/DB06209) · **PubChem:** [CID 6918456](https://pubchem.ncbi.nlm.nih.gov/compound/6918456)
- **molar mass:** 373.441 g/mol (C20H20FNO3S) — DrugBank
- **groups:** approved, investigational

## About

Prasugrel is a platelet inhibitor used to prevent blood clots in people with acute coronary syndrome, including myocardial infarction and unstable angina. It is an approved antiplatelet medicine authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416232](https://www.wikidata.org/wiki/Q416232) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Pras-AM | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 21:23 | 2:03 | 0/1/0 | 0/2/0 | 0/0/0 | 103,999/9,021 | einfracz / qwen3.8-27b | 10 | 1/2 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Moser_2018_reference](drugs/drug_prasugrel/Prasugrel_Moser2018_reference.md) | — | 1-compartment (no model) | 0 | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> | [Ernest_2008_MPA](drugs/drug_prasugrel/pd_Ernest_2008_MPA.md) | maximal platelet aggregation ← prasugrel active metabolite · direct sigmoid Emax (Hill) effect | — | Ernest CS et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2008) | [10.1007/s10928-008-9103-7](https://doi.org/10.1007/s10928-008-9103-7) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kim_2023_MPA](drugs/drug_prasugrel/pd_Kim_2023_MPA.md) | maximal platelet aggregation ← R-138727 · target-mediated drug disposition | — | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prasugrel).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| distribution | blood | `ALB` substrate | DrugBank actor |
| metabolism | liver | `CES2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CES2` substrate, `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: P2RY12 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 22 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ernest_2008.pdf` | Ernest CS et al., Population pharmacokinetics and pharmac…, Journal of pharmacokinetics… (2008) | popPK | 10 | [10.1007/s10928-008-9103-7](https://doi.org/10.1007/s10928-008-9103-7) | [19023649](https://pubmed.ncbi.nlm.nih.gov/19023649) | The study reports a population PK model for prasugrel's active metabolite, but the extracted evidence contains no numeric parameter values (clearance, volume, etc.), only qualitative descriptions of covariates and results. |
| `Kim_2023.pdf` | Kim MJ et al., Pharmacokinetic and Pharmacodynamic Mod…, Clinical pharmacology in dr… (2023) | popPK | 10 | [10.1002/cpdd.1172](https://doi.org/10.1002/cpdd.1172) | [36251178](https://pubmed.ncbi.nlm.nih.gov/36251178) | The paper describes a population PK model for prasugrel metabolites in humans, but the abstract provided contains no numeric parameter values. |
| `Moser_2018.pdf` | Moser BA et al., Population Pharmacokinetic and Exposure…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-017-0556-y](https://doi.org/10.1007/s40262-017-0556-y) | [28578536](https://pubmed.ncbi.nlm.nih.gov/28578536) | The paper reports a population PK model for prasugrel's active metabolite in humans with specific numeric estimates for CL/F (172 L/h) and Vd/F (51.7 L). |
| `Wrishko_2009.pdf` | Wrishko RE et al., Population pharmacokinetic analyses to…, Journal of clinical pharmac… (2009) | popPK | 10 | [10.1177/0091270009337942](https://doi.org/10.1177/0091270009337942) | [19546250](https://pubmed.ncbi.nlm.nih.gov/19546250) | This is a population PK study of prasugrel's active metabolite with a compartmental model, but specific central PK parameter values (CL, V, Q) are not explicitly listed in the provided text, only relative exposure changes (geometric mean ratios/percentages) and confidence intervals. |

<sub>queue written 2026-10-14T21:21:44.266027+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chen_2024 | irrelevant | 2 | 0 | The paper is a systematic review of multiple drugs (clopidogrel, prasugrel, ticagrelor) focused on clinical appraisal and simulation, with no specific quantitative PK parameter values for prasugrel provided in the evidence. |
| PD | Chen_2024 | not_relevant | 3 | 1 | The paper is a systematic review and simulation study that summarizes existing models but does not present original numeric PD parameters (e.g., Emax, EC50) for prasugrel in the provided text. |
| popPK | Ernest_2008 | relevant | 10 | 0 | The study reports a population PK model for prasugrel's active metabolite, but the extracted evidence contains no numeric parameter values (clearance, volume, etc.), only qualitative descriptions of covariates and results. |
| popPK | Henrich_2021 | irrelevant | 1 | 0 | The study focuses on the PK/PD modeling of selatogrel, with prasugrel serving only as a comparator for drug interactions without reporting quantitative disposition parameters for prasugrel. |
| popPK | Hsin_2023 | irrelevant | 1 | 0 | The study focuses on selatogrel and uses prasugrel only as a comparator in simulations; no quantitative pharmacokinetic parameter values for prasugrel are reported in the text. |
| popPK | Kaul_2016 | irrelevant | 0 | 0 | The paper is a health-related quality of life (HRQoL) analysis from a clinical trial and contains no pharmacokinetic data. |
| popPK | Kim_2023 | relevant | 10 | 0 | The paper describes a population PK model for prasugrel metabolites in humans, but the abstract provided contains no numeric parameter values. |
| popPK | Mega_2009 | irrelevant | 2 | 0 | The study focuses on pharmacogenetics and clinical outcomes rather than reporting quantitative population pharmacokinetic parameters (CL, V, ka) for prasugrel. |
| PD | Mega_2009 | not_relevant | 2 | 0 | The paper reports a null finding regarding genetic polymorphisms and prasugrel response, providing no numeric PD parameters (Emax, EC50) or concentration-effect curves. |
| PD | Moser_2018 | not_relevant | 3 | 0 | The paper reports a population PK model and an exposure-response analysis, but explicitly states that no apparent relationship or statistically significant effect was found between prasugrel exposure and VOC event rates, meaning no numeric PD parameters (like Emax or EC50) are reported or derivable. |
| popPK | Riesmeyer_2012 | irrelevant | 2 | 0 | The paper focuses on the clinical relationship between exposure to the active metabolite and bleeding outcomes rather than reporting primary quantitative pharmacokinetic disposition parameters (such as clearance or volume) for prasugrel itself, and no numeric PK values are provided in the text. |
| popPK | Siller-Matula_2010 | irrelevant | 1 | 0 | The paper is a narrative review of antiplatelet drugs that mentions prasugrel but only provides pharmacodynamic data (platelet inhibition) and a vague metabolite half-life range, without specific quantitative PK parameters (CL, Vd) or population models for the parent drug. |
| PD | Siller-Matula_2010 | not_relevant | 2 | 0 | The paper is a review article summarizing the pharmacological profiles of various antiplatelet drugs, including prasugrel, but does not present original data, specific numeric PD parameters, or extractable concentration-effect curves for prasugrel. |
| popPK | Sun_2024 | irrelevant | 1 | 0 | The paper focuses on the structural refinement of clopidogrel derivatives, using prasugrel only as a structural reference point without reporting quantitative PK parameters for prasugrel itself. |
| PD | Sun_2024 | not_relevant | 1 | 0 | The paper focuses on the design and synthesis of new clopidogrel derivatives and mentions prasugrel only as a structural inspiration, without reporting any specific pharmacodynamic or exposure-response data for prasugrel. |
| popPK | Teng_2012 | irrelevant | 0 | 0 | The paper is a review of ticagrelor's pharmacokinetics, with prasugrel mentioned only as a comparator without any quantitative PK parameters provided for it. |
| PD | Teng_2012 | not_relevant | 1 | 0 | The paper is a review of ticagrelor and only qualitatively mentions prasugrel without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Teng_2015 | irrelevant | 0 | 0 | This is a review of ticagrelor's pharmacokinetics, and while it includes a table comparing ticagrelor with prasugrel, the subject drug is not prasugrel and no original quantitative PK parameters for prasugrel are reported. |
| PD | Teng_2015 | not_relevant | 2 | 1 | The paper is a review of ticagrelor; while it mentions prasugrel qualitatively and includes a figure of a ticagrelor PD model, it does not report extractable numeric PD parameters for prasugrel. |
| popPK | Valgimigli_2024 | irrelevant | 0 | 0 | This is a clinical outcome meta-analysis of P2Y12 inhibitors, not a pharmacokinetic study, and prasugrel is only mentioned as a minor comparator in one trial. |
| popPK | Wrishko_2009 | relevant | 10 | 4 | This is a population PK study of prasugrel's active metabolite with a compartmental model, but specific central PK parameter values (CL, V, Q) are not explicitly listed in the provided text, only relative exposure changes (geometric mean ratios/percentages) and confidence intervals. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 21:21 UTC</sub>
