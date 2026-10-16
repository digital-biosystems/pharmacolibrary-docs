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

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 16:23 | 4:17 | 0/2/0 | 0/1/0 | 0/0/0 | 68,054/22,138 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Makino_2019_base](drugs/drug_amrubicin/Amrubicin_Makino2019_base.md) | — | parent + metabolite (no model) | 9 | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by qwen3.8-27b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Makino_2019_final](drugs/drug_amrubicin/Amrubicin_Makino2019_final.md) | — | parent + metabolite (no model) | 11 | Makino Y et al., Individual optimal dose of amrubicin to…, Cancer science (2019) | [10.1111/cas.14194](https://doi.org/10.1111/cas.14194) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:qwen3.8-27b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | [Yanaihara_2007_percentage_decrease_of_neutrophils](drugs/drug_amrubicin/pd_Yanaihara_2007_percentage_decrease_of_neutrophils.md) | percentage decrease of neutrophils · direct sigmoid Emax (Hill) effect | — | Yanaihara T et al., Phase I and pharmacologic study of irin…, Cancer chemotherapy and pha… (2007) | [10.1007/s00280-006-0279-5](https://doi.org/10.1007/s00280-006-0279-5) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=amrubicin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `POR` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABCB5 (substrate), CBR1 (substrate), DNA (unknown), TOP2A (unknown).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

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

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 16:19 UTC</sub>
