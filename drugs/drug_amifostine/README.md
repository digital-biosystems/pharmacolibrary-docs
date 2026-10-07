<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;amifostine&quot;}]"></div>

# amifostine

- **generic name:** amifostine
- **ATC codes:** `V03AF05`
- **DrugBank:** [DB01143](https://go.drugbank.com/drugs/DB01143) · **PubChem:** [CID 2141](https://pubchem.ncbi.nlm.nih.gov/compound/2141)
- **molar mass:** 214.223 g/mol (C5H15N2O3PS) — DrugBank
- **groups:** approved

## About

Amifostine is a detoxifying agent used to protect healthy tissue from side effects of cancer chemotherapy or radiotherapy. It is an approved medicine, used mainly in oncology settings alongside antineoplastic treatment.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q251698](https://www.wikidata.org/wiki/Q251698) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:20 | 0:37 | 0/0/0 | 0/1/0 | 0/0/0 | 60,959/1,218 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Marzatico_2000_OH_scavenging](drugs/drug_amifostine/pd_Marzatico_2000_OH_scavenging.md) | Scavenging of hydroxyl radicals (OH-) by amifostine ← amifostine (WR-2721) · inhibition effect | — | Marzatico F et al., In vitro antioxidant properties of amif…, Cancer chemotherapy and pha… (2000) | [10.1007/s002800050026](https://doi.org/10.1007/s002800050026) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=amifostine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALPG (inducer), ALPL (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | DeLouise_2023 | irrelevant | 0 | 0 | This is an in vitro/in vivo radioprotection drug-screening study; amifostine is only a comparator and no PK parameters (CL, V, half-life with volume, or PK model) for amifostine are reported. |
| popPK | Juan_2005 | irrelevant | 2 | 2 | Amifostine is only a co-administered cytoprotective agent; the PK parameters reported (AUC, Cmax, TPP) are for paclitaxel, not amifostine, and no amifostine disposition values appear. |
| popPK | Marzatico_2000 | irrelevant | 0 | 0 | In vitro antioxidant activity study with no PK disposition parameters for amifostine. |
| popPK | Mertsch_1998 | irrelevant | 0 | 0 | In-vitro mechanistic study of cytoprotection in bovine endothelial cells with no PK disposition parameters for amifostine. |
| popPK | Piraino_2025 | irrelevant | 0 | 0 | This is a drug-screening/tissue-chip study of radioprotectants; amifostine (WR-1065) is only a comparator and no PK parameters for it are reported. |
| popPK | Verma_2014 | irrelevant | 0 | 0 | The PK parameters reported are for DRDE-07, an amifostine analog, not for amifostine itself; amifostine is only mentioned as the parent scaffold. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
