<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V09A&quot;,&quot;href&quot;:&quot;atc/V09A.md&quot;},{&quot;label&quot;:&quot;technetium (99mTc) exametazime&quot;}]"></div>

# technetium (99mTc) exametazime

- **generic name:** technetium (99mTc) exametazime
- **ATC codes:** `V09AA01`
- **DrugBank:** [DB09163](https://go.drugbank.com/drugs/DB09163) · **PubChem:** none
- **groups:** approved

## About

Technetium (99mTc) exametazime is a radiopharmaceutical used as a diagnostic imaging agent for the central nervous system. It is an approved diagnostic radiopharmaceutical used in nuclear medicine for brain imaging.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7692225](https://www.wikidata.org/wiki/Q7692225) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydrophilic HM-PAO | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Lassen_1988_reference](drugs/drug_technetium_99mtc_exametazime/Technetium99mtcExametazime_Lassen1988_reference.md) | — | parent + metabolite (no model) | 4 | Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988) | [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=technetium_99mtc_exametazime).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | brain | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:54 | 4:04 | 0/1/0 | 0/0/0 | 0/0/0 | 41,928/15,734 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 67 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lassen_1988.pdf` | Lassen NA et al., The retention of [99mTc]-d,l-HM-PAO in…, Journal of cerebral blood f… (1988) | popPK | 10 | [10.1038/jcbfm.1988.28](https://doi.org/10.1038/jcbfm.1988.28) | [3192638](https://pubmed.ncbi.nlm.nih.gov/3192638) | Human brain kinetic model reports numeric clearance and compartmental rate parameters for HM-PAO. |
| `Apostolova_2012.pdf` | Apostolova I et al., Brain perfusion SPECT in the mouse: nor…, NeuroImage (2012) | popPK | 9 | [10.1016/j.neuroimage.2012.08.038](https://doi.org/10.1016/j.neuroimage.2012.08.038) | [22971548](https://pubmed.ncbi.nlm.nih.gov/22971548) | Mouse HMPAO kinetics include numeric peak uptake and tissue washout values. |
| `Clough_2019.pdf` | Clough AV et al., Pharmacokinetics of 99mTc-HMPAO in isol…, Journal of applied physiolo… (2019) | popPK | 9 | [10.1152/japplphysiol.00717.2018](https://doi.org/10.1152/japplphysiol.00717.2018) | [31414953](https://pubmed.ncbi.nlm.nih.gov/31414953) | A pulmonary disposition model was fit, but its numeric parameters are not included in the evidence. |
| `Kao_1995.pdf` | Kao CH et al., Supine lung clearance of Tc-99m DTPA an…, Clinical nuclear medicine (1995) | popPK | 7 | [10.1097/00003072-199507000-00016](https://doi.org/10.1097/00003072-199507000-00016) | [7554670](https://pubmed.ncbi.nlm.nih.gov/7554670) | Human lung clearance of HMPAO was measured, but no numeric clearance values are present in the evidence. |

<sub>queue written 2026-10-07 18:52 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Algotsson_1993 | irrelevant | 0 | 0 | HMPAO is used as a cerebral blood-flow imaging agent, with no quantitative pharmacokinetic disposition parameters reported. |
| popPK | Andersen_1987 | irrelevant | 1 | 1 | This is a human imaging comparison reporting brain-count loss, not quantitative pharmacokinetic disposition parameters. |
| popPK | Clough_2019 | relevant | 9 | 1 | A pulmonary disposition model was fit, but its numeric parameters are not included in the evidence. |
| popPK | Friberg_1994 | irrelevant | 0 | 0 | The kinetic values are for 99mTc-bicisate (ECD), not technetium_99mtc_exametazime (HM-PAO). |
| popPK | Isaka_1994 | irrelevant | 0 | 0 | The study reports cerebral blood flow measurements, not pharmacokinetic disposition parameters for technetium-99m HMPAO. |
| popPK | Kao_1995 | relevant | 7 | 0 | Human lung clearance of HMPAO was measured, but no numeric clearance values are present in the evidence. |
| popPK | Kothari_2000 | irrelevant | 0 | 0 | This study reports qualitative biodistribution of different technetium complexes, not pharmacokinetic parameters for technetium_99mtc_exametazime. |
| popPK | Lukawska_2014 | irrelevant | 1 | 0 | The reported half-lives describe labeled-cell efflux, not technetium_99mtc_exametazime pharmacokinetic parameters. |
| popPK | Léveillé_1992 | irrelevant | 3 | 1 | Human HMPAO imaging is compared, but the evidence gives no quantitative PK parameters beyond a brain-washout percentage. |
| popPK | Matsuda_1991 | irrelevant | 0 | 0 | The quantitative findings are for 99mTc-ECD; HMPAO is only a comparison agent. |
| popPK | Mills_2013 | irrelevant | 0 | 0 | This is a review of cerebral vasospasm imaging and reports no quantitative pharmacokinetic parameters for technetium-99m exametazime. |
| popPK | Moerlein_1994 | irrelevant | 1 | 0 | Technetium-99m HMPAO is only a comparator; the reported numeric values are for iodine-123 tracers. |
| popPK | Ogasawara_1995 | irrelevant | 2 | 0 | Human tracer washout is described qualitatively, with no numeric disposition parameters reported. |
| popPK | Ruf_2010 | irrelevant | 0 | 0 | This is a clinical review and reports no quantitative disposition parameters for technetium_99mtc_exametazime. |
| popPK | Sharma_2017 | irrelevant | 0 | 0 | This is a review and provides no quantitative pharmacokinetic parameters for technetium_99mtc_exametazime. |
| popPK | Youssef_1996 | irrelevant | 1 | 0 | Technetium-99m exametazime is used to label neutrophils, and no drug disposition parameters are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Btechnetium_99mtc_exametazime%5D&body=Drug%3A%20technetium_99mtc_exametazime%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_technetium_99mtc_exametazime/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 18:53 UTC</sub>
