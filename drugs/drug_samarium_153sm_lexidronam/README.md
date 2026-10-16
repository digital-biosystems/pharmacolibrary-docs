<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V10B&quot;,&quot;href&quot;:&quot;atc/V10B.md&quot;},{&quot;label&quot;:&quot;samarium (153Sm) lexidronam&quot;}]"></div>

# samarium (153Sm) lexidronam

- **generic name:** samarium (153Sm) lexidronam
- **ATC codes:** `V10BX02`
- **DrugBank:** [DB05273](https://go.drugbank.com/drugs/DB05273) · **PubChem:** not captured
- **groups:** approved

## About

Samarium (153Sm) lexidronam is a radiopharmaceutical used to relieve pain from cancer that has spread to the bones. It is an approved medicine, with one product authorised in the European Union, and is used for bone pain palliation.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q20817238](https://www.wikidata.org/wiki/Q20817238) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:49 | 1:00 | 0/0/0 | 0/0/0 | 0/0/0 | 22,434/1,476 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 21 matched, 19 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bartlett_2002.pdf` | Bartlett ML et al., Dosimetry and toxicity of Quadramet for…, European journal of nuclear… (2002) | popPK | 9 | [10.1007/s00259-002-0934-y](https://doi.org/10.1007/s00259-002-0934-y) | [12397466](https://pubmed.ncbi.nlm.nih.gov/12397466) | The paper reports quantitative pharmacokinetic parameters, specifically a median biological half-life of 1.4 h, for samarium-153 lexidronam in human patients. |
| `Louw_1996.pdf` | Louw WK et al., Evaluation of samarium-153 and holmium-…, Nuclear medicine and biology (1996) | popPK | 6 | [10.1016/s0969-8051(96)00117-5](https://doi.org/10.1016/s0969-8051(96)00117-5) | [9004281](https://pubmed.ncbi.nlm.nih.gov/9004281) | The paper mentions that a pharmacokinetic analysis was performed but does not report any specific quantitative parameter values (CL, V, t1/2) in the provided evidence. |

<sub>queue written 2026-10-14T19:48:53.605746+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bartlett_2002 | not_relevant | 3 | 2 | The paper reports radiation dosimetry (absorbed dose per administered activity) and qualitative toxicity outcomes, but does not provide a pharmacodynamic model or numeric concentration-effect parameters (e.g., Emax, EC50) for the drug's biological effect. |
| popPK | Bianchi_2009 | irrelevant | 2 | 0 | The study focuses on dosimetry and bone uptake percentages for 153Sm-EDTMP (a different compound than samarium_153sm_lexidronam) and does not report compartmental PK parameters like clearance or volume. |
| PD | Bianchi_2009 | not_relevant | 0 | 0 | The paper reports a correlation between surrogate dosimetry parameters (Tc-MDP uptake vs Sm-EDTMP uptake) for dose optimization, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., pain relief vs. concentration/dose) with numeric PD parameters. |
| popPK | Das_2014 | irrelevant | 0 | 0 | The paper focuses on Lu-177-EDTMP, not samarium-153 lexidronam, and reports no PK parameters for the target drug. |
| popPK | Dormehl_1998 | irrelevant | 2 | 0 | The study reports qualitative biodistribution and tracer kinetics in baboons but does not provide quantitative PK parameters (CL, V, t1/2) for samarium-153-lexidronam in the evidence. |
| popPK | Eary_1993 | relevant | 4 | 2 | The study reports biodistribution and dosimetry (clearance times, radiation doses) rather than formal compartmental PK parameters (CL, V, ka) for the specific complex samarium-153_lexidronam (EDTMP). |
| popPK | Garnuszek_2003 | irrelevant | 0 | 0 | The paper evaluates a formulation kit for EDTMP radiopharmaceuticals and reports biodistribution data for 177Lu-EDTMP and 99mTc-EDTMP, but does not provide specific quantitative PK parameters (CL, V, t1/2) for Samarium-153-lexidronam (153Sm-EDTMP). |
| popPK | Goeckeler_1987 | irrelevant | 0 | 0 | The study focuses on a different isotope (Sm-153) and different chelates (like EDTMP), not the specific drug Samarium-153 lexidronam (EDTMP is the ligand for lexidronam, but the paper is about the radionuclide chelation itself in preclinical models without specific PK parameter reporting for the approved drug formulation). |
| popPK | Goeckeler_1993 | irrelevant | 0 | 0 | The study is a biochemical analysis of drug integrity (complexation) in urine and does not report quantitative population-pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Hassfjell_1998 | irrelevant | 0 | 0 | The paper focuses on physical characterization of a radioguided surgery probe and simulations of tumour detection, not on quantitative pharmacokinetic parameters (CL, V, etc.) for the drug. |
| popPK | Ketring_1987 | irrelevant | 0 | 0 | The paper discusses 153Sm-EDTMP (a different chelator) rather than 153Sm-lexidronam, and the provided text is a summary/review without specific quantitative PK parameter values for the target drug. |
| popPK | Kumar_2026 | irrelevant | 0 | 0 | The paper describes a computational framework for drug repurposing against fusion proteins and does not report pharmacokinetic parameters for samarium_153_sm_lexidronam. |
| PD | Kumar_2026 | not_relevant | 0 | 0 | The paper describes a computational drug repurposing framework for fusion proteins and does not involve samarium (153Sm) lexidronam or report any pharmacodynamic or exposure-response data. |
| popPK | Lamb_1997 | irrelevant | 3 | 0 | The text describes qualitative clearance kinetics (time to complete clearance from blood/urine) but does not provide quantitative pharmacokinetic parameters like CL, V, or half-life with a volume. |
| popPK | Louw_1996 | irrelevant | 6 | 0 | The paper mentions that a pharmacokinetic analysis was performed but does not report any specific quantitative parameter values (CL, V, t1/2) in the provided evidence. |
| popPK | Popwell_2014 | irrelevant | 0 | 0 | The paper discusses the synthesis and biodistribution of new polymeric phosphonates, not the pharmacokinetic parameters of samarium-153 lexidronam. |
| popPK | Pusuwan_1996 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Singh_1989 | irrelevant | 0 | 0 | The study examines samarium-153 EDTMP, a different radiopharmaceutical distinct from samarium-153 lexidronam (EDTMP is not the same ligand as lexidronam/EDTMP derivative often confused, but specifically Samarium Lexidronam is [153Sm]EDTMP in some contexts, however, the evidence provided is a biodistribution/comparative uptake study, not a compartmental PK parameter study (CL, V, t1/2, ka) for the specific drug lexidronam in the context of standard PK modeling; more importantly, the paper title says "Samarium-153 EDTMP" and compares uptake, it does not report quantitative PK parameters like clearance or volume of distribution for a model of lexidronam specifically, nor does it provide the numeric values for PK parameters). |
| popPK | Turner_1989 | relevant | 3 | 2 | The paper reports qualitative PK characteristics (urinary clearance percentage) and biodistribution data for samarium-153 edtmp (lexidronam) in rats, sheep, and humans, but lacks explicit quantitative compartmental parameters (CL, V, half-life) in the provided text. |
| popPK | da_2002 | irrelevant | 0 | 0 | The study is a cytogenetic analysis of bone pain therapy and does not report pharmacokinetic parameters such as clearance, volume, or half-life. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
