<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;nedocromil&quot;}]"></div>

# nedocromil

- **generic name:** nedocromil
- **ATC codes:** `R01AC07`, `R03BC03`, `S01GX04`
- **DrugBank:** [DB00716](https://go.drugbank.com/drugs/DB00716) · **PubChem:** [CID 50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294)
- **molar mass:** 371.3408 g/mol (C19H17NO7) — DrugBank
- **groups:** approved

## About

Nedocromil is an anti-allergic, anti-inflammatory drug used for allergic conditions such as asthma, allergic rhinitis, and eye allergies including giant papillary conjunctivitis. It is an approved medicine given as nasal, inhaled, and eye-drop preparations, though it is not authorised by the European Medicines Agency and is now only rarely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416706](https://www.wikidata.org/wiki/Q416706) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nedocromil | parent | 371.341 | C19H17NO7 | DrugBank | [50294](https://pubchem.ncbi.nlm.nih.gov/compound/50294) | Neale_1987 |
| nedocromil sodium | metabolite | 415.309 | C19H15NNa2O7 | PubChem | [50295](https://pubchem.ncbi.nlm.nih.gov/compound/50295) | Neale_1987 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 13:15 | 0:41 | 0/0/1 | 0/0/0 | 0/0/0 | 11,630/898 | ollama / glm-5.3-flash | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Neale_1987_reference](drugs/drug_nedocromil/Nedocromil_Neale1987_reference.md) | — | 1-compartment (no model) | 2 | Neale MG et al., The pharmacokinetics of nedocromil sodi…, British journal of clinical… (1987) | [10.1111/j.1365-2125.1987.tb03203.x](https://doi.org/10.1111/j.1365-2125.1987.tb03203.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nedocromil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: CYSLTR1 (target), CYSLTR2 (target), FPR1 (target), PTGDR (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Neale_1987.pdf` | Neale MG et al., The pharmacokinetics of nedocromil sodi…, British journal of clinical… (1987) | popPK | 10 | [10.1111/j.1365-2125.1987.tb03203.x](https://doi.org/10.1111/j.1365-2125.1987.tb03203.x) | [2825746](https://pubmed.ncbi.nlm.nih.gov/2825746) | Original human PK study of nedocromil with numeric CL, k10, beta, and absorption parameters reported directly in the abstract. |
| `Lindén_1999.pdf` | Lindén A et al., Effect of nedocromil sodium on non-adre…, Regulatory peptides (1999) | pd | 4 | [10.1016/s0167-0115(99)00018-x](https://doi.org/10.1016/s0167-0115(99)00018-x) | [10395407](https://www.ncbi.nlm.nih.gov/pubmed/10395407) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-07T13:15:28.498575+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Lindén_1999 | irrelevant | 0 | 0 | In-vitro mechanistic study of nedocromil's effects on guinea pig bronchi with no pharmacokinetic parameters reported. |
| PGx | Wu_2009 | not_relevant | 0 | 0 | No gene variant/genotype effects on nedocromil PK/PD parameters are reported; the study assesses repeatability (ICC) of asthma phenotypes by treatment group only. |
| popPK | Wu_2014 | irrelevant | 0 | 0 | This is a genetics study of longitudinal FEV1 in asthma; nedocromil is only a treatment arm, with no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 13:15 UTC</sub>
