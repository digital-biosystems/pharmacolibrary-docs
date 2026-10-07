<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;epcoritamab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Epcoritamab_Li2025_reference&quot;,&quot;label&quot;:&quot;Li_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# epcoritamab

- **generic name:** epcoritamab
- **ATC codes:** `L01FX27`
- **DrugBank:** [DB16672](https://go.drugbank.com/drugs/DB16672) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Epcoritamab, a monoclonal antibody anticancer drug, is used to treat diffuse large B-cell lymphoma. It is approved and authorised in the European Union, with one authorised product there, and remains under investigation for further uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q119025940](https://www.wikidata.org/wiki/Q119025940) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:40 | 1:41 | 1/0/0 | 1/0/0 | 0/0/0 | 29,553/6,480 | openai / gpt-6-luna | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2025_reference](drugs/drug_epcoritamab/Epcoritamab_Li2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 4 | Li T et al., Population Pharmacokinetics of Epcorita…, Clinical pharmacokinetics (2025) | [10.1007/s40262-024-01464-2](https://doi.org/10.1007/s40262-024-01464-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_B_cell](drugs/drug_epcoritamab/pd_Li_2022_B_cell.md) | blood B-cell count ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_ORR](drugs/drug_epcoritamab/pd_Li_2022_ORR.md) | response rate ← epcoritamab · direct Emax (saturable) effect | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_T_cell](drugs/drug_epcoritamab/pd_Li_2022_T_cell.md) | blood T-cell count ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_trimer_formation](drugs/drug_epcoritamab/pd_Li_2022_trimer_formation.md) | trimer formation ← epcoritamab · model not identified | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_tumor_size](drugs/drug_epcoritamab/pd_Li_2022_tumor_size.md) | tumor size ← epcoritamab · disease-progression model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_CRS](drugs/drug_epcoritamab/pd_Li_2022_CRS.md) | CRS (any grade) ← epcoritamab · categorical (graded) response model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span> | [Li_2022_CRS_2](drugs/drug_epcoritamab/pd_Li_2022_CRS_2.md) | grade 2 CRS ← epcoritamab · categorical (graded) response model | — | Li T et al., Semimechanistic Physiologically-Based P…, Clinical pharmacology and t… (2022) | [10.1002/cpt.2729](https://doi.org/10.1002/cpt.2729) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=epcoritamab) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CD3E (antibody), CD3E (binder), MS4A1 (antibody), MS4A1 (binder).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2025.pdf` | Li T et al., Population Pharmacokinetics of Epcorita…, Clinical pharmacokinetics (2025) | popPK | 10 | [10.1007/s40262-024-01464-2](https://doi.org/10.1007/s40262-024-01464-2) | [39708278](https://pubmed.ncbi.nlm.nih.gov/39708278) | Human population-PK model reports numeric epcoritamab disposition parameters in the evidence. |

<sub>queue written 2026-10-07T12:39:22.795097+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Li_2022 | relevant | 9 | 1 | A human and monkey population PK/PD model was fitted, but its numeric PK parameter values are only referenced in supplementary tables not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:39 UTC</sub>
