<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L02B&quot;,&quot;href&quot;:&quot;atc/L02B.md&quot;},{&quot;label&quot;:&quot;aminoglutethimide&quot;}]"></div>

# aminoglutethimide

- **generic name:** aminoglutethimide
- **ATC codes:** `L02BG01`
- **DrugBank:** [DB00357](https://go.drugbank.com/drugs/DB00357) · **PubChem:** [CID 2145](https://pubchem.ncbi.nlm.nih.gov/compound/2145)
- **molar mass:** 232.2783 g/mol (C13H16N2O2) — DrugBank
- **groups:** approved, withdrawn

## About

Aminoglutethimide is an aromatase inhibitor that was used as hormonal therapy for breast cancer, and also for prostate cancer and Cushing's syndrome. It has been withdrawn from the market, reportedly because of toxicity concerns.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q241150](https://www.wikidata.org/wiki/Q241150) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| aminoglutethimide | parent | 232.278 | C13H16N2O2 | DrugBank | [2145](https://pubchem.ncbi.nlm.nih.gov/compound/2145) | Thompson_1981 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Thompson_1981_reference](drugs/drug_aminoglutethimide/Aminoglutethimide_Thompson1981_reference.md) | — | 1-compartment (no model) | 1 | Thompson TA et al., Aminoglutethimide bioavailability, phar…, Journal of pharmaceutical s… (1981) | [10.1002/jps.2600700919](https://doi.org/10.1002/jps.2600700919) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=aminoglutethimide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` inducer, `CYP3A4` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| — | adipose tissue | `CYP19A1` inhibitor | DrugBank actor |
| — | ovary | `CYP19A1` inhibitor | DrugBank actor |
| — | testis | `CYP19A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CYP11A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:03 | 0:30 | 0/1/0 | 0/0/0 | 0/0/0 | 24,360/1,490 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Thompson_1981.pdf` | Thompson TA et al., Aminoglutethimide bioavailability, phar…, Journal of pharmaceutical s… (1981) | popPK | 9 | [10.1002/jps.2600700919](https://doi.org/10.1002/jps.2600700919) | [6101151](https://pubmed.ncbi.nlm.nih.gov/6101151) | The paper reports quantitative PK parameters (Cmax, Tmax, AUC) and fits a two-compartment model for aminoglutethimide in humans, but specific clearance and volume values are not explicitly listed in the text, only estimated. |
| `Alshowaier_1999.pdf` | Alshowaier IA et al., Pharmacokinetics of S- and R-enantiomer…, Journal of clinical pharmac… (1999) | popPK | 8 | not captured | [10579143](https://pubmed.ncbi.nlm.nih.gov/10579143) | The study reports quantitative pharmacokinetic parameters for aminoglutethimide enantiomers in humans, but the specific numeric values for clearance, volume, and half-life are not provided in the evidence text, only qualitative comparisons and percentages. |
| `Brueggemeier_1990.pdf` | Brueggemeier RW et al., Aromatase inhibition by an enzyme-activ…, Cancer research (1990) | pd | 5 | not captured | [2340513](https://www.ncbi.nlm.nih.gov/pubmed/2340513) | metadata signals extractable PD data (EC50) |
| `DiBartolomeis_1986.pdf` | DiBartolomeis MJ et al., Inhibition of ACTH action on cultured b…, The Journal of biological c… (1986) | pd | 5 | not captured | [3007456](https://www.ncbi.nlm.nih.gov/pubmed/3007456) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-06T22:02:53.919150+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alshowaier_1999 | relevant | 8 | 2 | The study reports quantitative pharmacokinetic parameters for aminoglutethimide enantiomers in humans, but the specific numeric values for clearance, volume, and half-life are not provided in the evidence text, only qualitative comparisons and percentages. |
| popPK | Brueggemeier_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of aromatase inhibition where aminoglutethimide is used only as a comparative agent, and no pharmacokinetic parameters are reported. |
| popPK | DiBartolomeis_1986 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on steroidogenesis in bovine adrenal cells where aminoglutethimide is used only as a pharmacological tool to inhibit cholesterol side-chain cleavage, not as the subject of a pharmacokinetic analysis. |
| popPK | Picard-Hagen_1997 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study on ACTH receptor mRNA levels where aminoglutethimide is used only as a steroidogenesis inhibitor, with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 22:02 UTC</sub>
