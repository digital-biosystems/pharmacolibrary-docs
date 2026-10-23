<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01D&quot;,&quot;href&quot;:&quot;atc/L01D.md&quot;},{&quot;label&quot;:&quot;amrubicin&quot;}]"></div>

# amrubicin

- **generic name:** amrubicin
- **ATC codes:** `L01DB10`
- **DrugBank:** [DB06263](https://go.drugbank.com/drugs/DB06263) · **PubChem:** [CID 3035016](https://pubchem.ncbi.nlm.nih.gov/compound/3035016)
- **molar mass:** 483.473 g/mol (C25H25NO9) — DrugBank
- **groups:** investigational

## About

Amrubicin is an anthracycline-type cytotoxic antibiotic investigated as an anticancer (antineoplastic) drug. It remains investigational and is not an authorised medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4748723](https://www.wikidata.org/wiki/Q4748723) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amrubicin | parent | 483.473 | C25H25NO9 | DrugBank | [3035016](https://pubchem.ncbi.nlm.nih.gov/compound/3035016) | Makino_2019 |
| amrubicinol (amrubicin and amrubicinol) | metabolite | 485.489 | C25H27NO9 | PubChem | [11755113](https://pubchem.ncbi.nlm.nih.gov/compound/11755113) | Makino_2019 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Makino_2019_base](drugs/drug_amrubicin/Amrubicin_Makino2019_base.md) | — | parent + metabolite (no model) | 9 | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [↳ final](drugs/drug_amrubicin/Amrubicin_Makino2019_final.md) | — | parent + metabolite (no model) | 11 |  |  |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> | [Yanaihara_2007_percentage_decrease_of_neutrophils](drugs/drug_amrubicin/pd_Yanaihara_2007_percentage_decrease_of_neutrophils.md) | percentage decrease of neutrophils · direct sigmoid Emax (Hill) effect | — | Yanaihara T et al., Phase I and pharmacologic study of irin…, Cancer chemotherapy and pha… (2007) | [10.1007/s00280-006-0279-5](https://doi.org/10.1007/s00280-006-0279-5) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:23 | 4:17 | 0/2/0 | 0/1/0 | 0/0/0 | 68,054/22,138 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Makino_2012.pdf` | Makino Y et al., Pharmacokinetic and pharmacodynamic stu…, Cancer chemotherapy and pha… (2012) | popPK | 10 | [10.1007/s00280-011-1768-8](https://doi.org/10.1007/s00280-011-1768-8) | [22042514](https://pubmed.ncbi.nlm.nih.gov/22042514) | Human amrubicin and amrubicinol PK models are reported, but no numeric parameter values are included in the evidence. |
| `Makino_2016.pdf` | Makino Y et al., Simultaneous optimization of limited sa…, Asia-Pacific journal of cli… (2016) | popPK | 10 | [10.1111/ajco.12485](https://doi.org/10.1111/ajco.12485) | [26948073](https://pubmed.ncbi.nlm.nih.gov/26948073) | The study models amrubicin and amrubicinol in patients, but the provided evidence contains no numeric disposition parameter values. |

<sub>queue written 2026-10-06T16:19:12.410875+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kimura_2009 | irrelevant | 2 | 0 | It reports a single AMR-OH concentration and a pharmacodynamic relationship, but no quantitative disposition parameters. |
| popPK | Makino_2012 | relevant | 10 | 1 | Human amrubicin and amrubicinol PK models are reported, but no numeric parameter values are included in the evidence. |
| popPK | Makino_2016 | relevant | 10 | 1 | The study models amrubicin and amrubicinol in patients, but the provided evidence contains no numeric disposition parameter values. |
| popPK | Yanaihara_2007 | irrelevant | 1 | 0 | The study reports pharmacokinetics of irinotecan and its metabolites, not amrubicin disposition parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 16:19 UTC</sub>
