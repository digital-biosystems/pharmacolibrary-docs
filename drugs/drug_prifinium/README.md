<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A03A&quot;,&quot;href&quot;:&quot;atc/A03A.md&quot;},{&quot;label&quot;:&quot;Prifinium&quot;}]"></div>

# Prifinium

- **generic name:** Prifinium
- **ATC codes:** `A03AB18`
- **DrugBank:** [DB13254](https://go.drugbank.com/drugs/DB13254) · **PubChem:** not captured
- **groups:** experimental

## About

Prifinium is a synthetic anticholinergic (quaternary ammonium) drug classified for functional gastrointestinal disorders. It appears to be only experimental, with no confirmed current marketing authorisation, so its present use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2109656](https://www.wikidata.org/wiki/Q2109656) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prifinium).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM5 (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 13:04 | 0:51 | 0/0/0 | 0/0/0 | 0/0/0 | 26,985/1,378 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 25 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Noguchi_1983.pdf` | Noguchi H et al., Pharmacokinetics of prifinium bromide i…, International journal of cl… (1983) | popPK | 10 | not captured | [6134685](https://pubmed.ncbi.nlm.nih.gov/6134685) | The abstract provides explicit quantitative PK parameters (CL, Vss, t1/2, bioavailability) for prifinium in humans. |

<sub>queue written 2026-10-04T13:04:35.093094+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bettini_1985 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of carnitine's effects on coronary vessels, using prifinium only as a diagnostic antagonist, with no PK parameters reported. |
| popPK | Bettini_1986 | irrelevant | 0 | 0 | Prifinium is used only as a pharmacological antagonist to block acetylcholine effects in an in-vitro study of carnitine, with no PK parameters reported. |
| popPK | Demol_1989 | irrelevant | 0 | 0 | The paper is a review of gastrointestinal motility disorders where prifinium is mentioned only as an example of an anticholinergic drug, with no pharmacokinetic data provided. |
| popPK | Dong_1995 | irrelevant | 0 | 0 | The study reports in-vitro ligand binding affinities for muscarinic receptors, not pharmacokinetic disposition parameters for prifinium. |
| popPK | Dureng_1977 | irrelevant | 0 | 0 | The study investigates receptor affinity (molecular pharmacology) in vitro, not pharmacokinetic disposition parameters. |
| popPK | Fieni_1997 | irrelevant | 0 | 0 | Prifinium is used only as a premedication (anti-emetic) in a veterinary protocol for pregnancy termination, with no pharmacokinetic parameters reported for it. |
| popPK | Frasson_1978 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the antispastic efficacy of prifinium bromide on esophageal motility, not a pharmacokinetic study, and no PK parameters are reported. |
| popPK | Hachet_1986 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of prifinium on gut motility in dogs, not its pharmacokinetic parameters. |
| popPK | Ishikawa_1993 | irrelevant | 0 | 0 | The paper is a clinical case report on the treatment of organophosphorus intoxication with prifinium, reporting clinical outcomes rather than pharmacokinetic parameters. |
| PD | Ishikawa_1993 | not_relevant | 1 | 0 | The text is a qualitative clinical summary describing the efficacy of prifinium bromide in treating chronic organophosphorus intoxication but provides no numeric PD parameters, dose-response data, or concentration-effect analysis. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The paper is an epidemiological and toxicological study where prifinium is mentioned only as a therapeutic antidote, with no pharmacokinetic parameters reported. |
| PD | Ishikawa_1996 | not_relevant | 0 | 0 | The paper is an epidemiological and pathological report on organophosphorus toxicity; Prifinium is mentioned only as a treatment antidote without any dose-response or exposure-response analysis. |
| popPK | Ishikawa_2016 | irrelevant | 0 | 0 | The study investigates the physiological effects of prifinium on mouse oviductal contractions and sperm migration, not its pharmacokinetic parameters. |
| popPK | Kubo_1981 | irrelevant | 0 | 0 | The study is a pharmacological comparison of ganglion blocking activity in cats, where prifinium is used only as a comparator agent, and no pharmacokinetic parameters are reported. |
| PD | Kubo_1981 | not_relevant | 1 | 0 | The paper focuses on the pharmacological profile of HSR-902, mentioning prifinium only for qualitative potency ranking without providing numeric PD parameters or extractable dose-response data for prifinium. |
| popPK | Kuriyama_2021 | irrelevant | 0 | 0 | The paper describes a chemical synthesis method for prifinium bromide and contains no pharmacokinetic data or disposition parameters. |
| popPK | Lacroix_1992 | irrelevant | 0 | 0 | The study investigates the physiological effects of prifinium on respiratory sinus arrhythmia, not its pharmacokinetic parameters. |
| popPK | Moriyoshi_1999 | irrelevant | 0 | 0 | The study investigates the efficacy of prifinium as a pretreatment to reduce side effects of fenprostalene in dogs, reporting no pharmacokinetic parameters (CL, V, etc.) for prifinium itself. |
| popPK | Sasaki_1985 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial for irritable bowel syndrome and does not report any pharmacokinetic parameters. |
| popPK | Subissi_1983 | irrelevant | 0 | 0 | The study is a pharmacological investigation of spasmolytic effects on rat intestine, not a pharmacokinetic study, and reports no disposition parameters for prifinium. |
| popPK | Tamura_1986 | irrelevant | 0 | 0 | The study is a clinical observation of electromyography in exotropia patients where prifinium is used as a therapeutic agent, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Terai_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects (bladder contractions) and mechanism of action, not pharmacokinetic disposition parameters. |
| popPK | Tohei_1975 | irrelevant | 0 | 0 | The study is a clinical pharmacodynamic evaluation of gastric tonus and form, not a pharmacokinetic study, and reports no disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
