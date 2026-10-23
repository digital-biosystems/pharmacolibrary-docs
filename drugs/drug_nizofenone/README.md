<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06B&quot;,&quot;href&quot;:&quot;atc/N06B.md&quot;},{&quot;label&quot;:&quot;nizofenone&quot;}]"></div>

# nizofenone

- **generic name:** nizofenone
- **ATC codes:** `N06BX10`
- **DrugBank:** [DB13546](https://go.drugbank.com/drugs/DB13546) · **PubChem:** not captured
- **molar mass:** 412.87 g/mol (C21H21ClN4O3) — DrugBank
- **groups:** experimental

## About

Nizofenone is a chemical compound that has been described as a neuroprotective and antiarrhythmic agent. It is classified as an experimental drug and is not an established, widely used medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q15409362](https://www.wikidata.org/wiki/Q15409362) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">in vitro</span> | [Bausch_1996_swelling_activated_anionic_channel_blockade](drugs/drug_nizofenone/pd_Bausch_1996_swelling_activated_anionic_channel_blockade.md) | swelling-activated anionic channel blockade ← nizofenone · inhibition effect | — | Bausch AR et al., Volume-sensitive chloride channels bloc…, Glia (1996) | [10.1002/(SICI)1098-1136(199609)18:1&lt;73::AID-GLIA8&gt;3.0.CO;2-4](https://doi.org/10.1002/(SICI)1098-1136(199609)18:1&lt;73::AID-GLIA8&gt;3.0.CO;2-4) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 01:00 | 2:27 | 0/0/0 | 0/1/0 | 0/0/0 | 45,371/654 | ollama / glm-5.3-flash | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bausch_1996.pdf` | Bausch AR et al., Volume-sensitive chloride channels bloc…, Glia (1996) | pd | 4 | [10.1002/(SICI)1098-1136(199609)18:1&lt;73::AID-GLIA8&gt;3.0.CO;2-4](https://doi.org/10.1002/(SICI)1098-1136(199609)18:1<73::AID-GLIA8>3.0.CO;2-4) | [8891694](https://www.ncbi.nlm.nih.gov/pubmed/8891694) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-07T01:00:20.787483+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kuchimanchi_2022 | irrelevant | 0 | 0 | This is a population PK study of diroximel fumarate metabolites (MMF/HES), not nizofenone; no nizofenone data appear. |
| popPK | Ochiai_1982 | irrelevant | 0 | 0 | Pharmacodynamic cerebral-ischemia study in cats; no PK disposition parameters for nizofenone are reported. |
| popPK | Ochiai_1982_2 | irrelevant | 0 | 0 | This is a cerebral blood flow/infarction efficacy study in cats; nizofenone is a treatment, with no PK disposition parameters reported. |
| popPK | Shuto_1984 | irrelevant | 0 | 0 | This is a neurophysiology/pharmacodynamics study of nizofenone's protective effects in cat brain ischemia, with no PK disposition parameters (CL, V, half-life, compartmental model) reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
