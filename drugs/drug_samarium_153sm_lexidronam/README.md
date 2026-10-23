<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;samarium (153Sm) lexidronam&quot;}]"></div>

# samarium (153Sm) lexidronam

- **generic name:** samarium (153Sm) lexidronam
- **ATC codes:** `V10BX02`
- **DrugBank:** [DB05273](https://go.drugbank.com/drugs/DB05273) · **PubChem:** not captured
- **groups:** approved

## About

Samarium (153Sm) lexidronam is a radiopharmaceutical used to relieve pain from cancer that has spread to the bones. It is an approved medicine, with one product authorised in the European Union, and is used for bone pain palliation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817238](https://www.wikidata.org/wiki/Q20817238) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 16:43 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 22,434/1,360 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartlett_2002.pdf` | Bartlett ML et al., Dosimetry and toxicity of Quadramet for…, European journal of nuclear… (2002) | popPK | 8 | [10.1007/s00259-002-0934-y](https://doi.org/10.1007/s00259-002-0934-y) | [12397466](https://pubmed.ncbi.nlm.nih.gov/12397466) | The study reports quantitative pharmacokinetic parameters (median biological half-life of 1.4 h and 24-h retention percentages) for samarium-153 EDTMP (Quadramet) in humans. |
| `Dormehl_1998.pdf` | Dormehl IC et al., Uptake of ethylenediamine tetramethylen…, Arzneimittel-Forschung (1998) | popPK | 8 | not captured | [9608885](https://pubmed.ncbi.nlm.nih.gov/9608885) | The study reports pharmacokinetic and biodistribution data for samarium-153-EDTMP in baboons, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| `Louw_1996.pdf` | Louw WK et al., Evaluation of samarium-153 and holmium-…, Nuclear medicine and biology (1996) | popPK | 8 | [10.1016/s0969-8051(96)00117-5](https://doi.org/10.1016/s0969-8051(96)00117-5) | [9004281](https://pubmed.ncbi.nlm.nih.gov/9004281) | The study reports multicompartmental pharmacokinetic analysis for samarium-153-EDTMP (lexidronam) in baboons, but the specific numeric parameter values are not present in the provided evidence. |

<sub>queue written 2026-10-07T16:43:24.888146+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bartlett_2002 | not_relevant | 3 | 2 | The paper reports radiation dosimetry (absorbed dose per administered activity) and qualitative toxicity outcomes, but does not provide a pharmacodynamic model or numeric concentration-effect parameters (e.g., Emax, EC50) for the drug's biological effect. |
| popPK | Bianchi_2009 | irrelevant | 2 | 0 | The study focuses on dosimetry and bone uptake percentages for 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam) and does not report compartmental PK parameters like clearance or volume. |
| PD | Bianchi_2009 | not_relevant | 0 | 0 | The paper reports a correlation between surrogate dosimetry parameters (Tc-MDP uptake vs Sm-EDTMP uptake) for dose optimization, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., pain relief vs. concentration/dose) with numeric PD parameters. |
| popPK | Das_2014 | irrelevant | 0 | 0 | The study focuses on 177Lu-EDTMP, not samarium-153 lexidronam, and does not report PK parameters for the target drug. |
| popPK | Dormehl_1998 | relevant | 8 | 2 | The study reports pharmacokinetic and biodistribution data for samarium-153-EDTMP in baboons, but specific quantitative parameter values (CL, V, etc.) are not explicitly listed in the provided text. |
| popPK | Eary_1993 | irrelevant | 2 | 0 | The study reports biodistribution and dosimetry for Samarium-153-EDTMP (a different chelate than lexidronam) and does not provide quantitative compartmental PK parameters (CL, V, Q) for the target drug. |
| popPK | Garnuszek_2003 | irrelevant | 0 | 0 | The study evaluates a formulation kit for EDTMP-based radiopharmaceuticals and compares biodistribution of 177Lu-EDTMP and 99mTc-EDTMP to 153Sm-EDTMP, but does not report quantitative PK parameters (CL, V, etc.) for samarium_153sm_lexidronam (which is a different compound, SM-401, not 153Sm-EDTMP). |
| popPK | Goeckeler_1987 | irrelevant | 2 | 0 | The study focuses on biodistribution and imaging characteristics (uptake, lesion ratios) rather than quantitative compartmental pharmacokinetic parameters (CL, V, t1/2) for samarium-153 lexidronam specifically. |
| popPK | Goeckeler_1993 | irrelevant | 2 | 0 | The study analyzes the chemical integrity of the drug in urine (complexation analysis) rather than reporting quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Hassfjell_1998 | irrelevant | 0 | 0 | The study focuses on the physical characterization of a radioguided surgery probe and simulation of detectability, not on the pharmacokinetic parameters (CL, V, etc.) of samarium-153 lexidronam. |
| popPK | Ketring_1987 | irrelevant | 2 | 0 | The paper is a review summarizing biokinetics without providing specific quantitative PK parameter values (CL, V, t1/2) in the text. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a computational framework for drug repurposing against fusion proteins and does not contain any pharmacokinetic data for samarium_153sm_lexidronam. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper describes a computational drug repurposing framework for fusion proteins and does not involve samarium (153Sm) lexidronam or report any pharmacodynamic or exposure-response data. |
| popPK | Lamb_1997 | irrelevant | 2 | 0 | The text describes qualitative clearance kinetics (time to complete clearance) and efficacy/toxicity data but lacks quantitative compartmental PK parameters (CL, V, t1/2) or a population PK model. |
| popPK | Louw_1996 | relevant | 8 | 0 | The study reports multicompartmental pharmacokinetic analysis for samarium-153-EDTMP (lexidronam) in baboons, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Popwell_2014 | irrelevant | 0 | 0 | The paper describes the synthesis and biodistribution of novel polymeric phosphonates for radionuclide delivery, not the pharmacokinetics of the specific drug samarium_153_sm_lexidronam. |
| popPK | Pusuwan_1996 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Singh_1989 | irrelevant | 0 | 0 | The study investigates samarium-153 EDTMP, which is a different chemical entity from the target drug samarium-153 lexidronam (EDTMP vs. lexidronam/SM-153). |
| popPK | Turner_1989 | irrelevant | 2 | 1 | The study focuses on dosimetry and therapeutic efficacy of 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam/EDTMP) and does not report quantitative PK parameters (CL, V, t1/2) for the subject drug. |
| popPK | da_2002 | irrelevant | 0 | 0 | The study focuses on cytogenetic effects (chromosome aberrations) rather than pharmacokinetic disposition parameters like clearance or volume. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
