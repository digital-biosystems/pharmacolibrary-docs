<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;talbutal&quot;}]"></div>

# talbutal

- **generic name:** talbutal
- **ATC codes:** `N05CA07`
- **DrugBank:** [DB00306](https://go.drugbank.com/drugs/DB00306) · **PubChem:** [CID 8275](https://pubchem.ncbi.nlm.nih.gov/compound/8275)
- **molar mass:** 224.2563 g/mol (C11H16N2O3) — DrugBank
- **groups:** approved, illicit

## About

Talbutal is a barbiturate used as a sedative and hypnotic to treat insomnia and anxiety. It is an approved barbiturate sedative, though barbiturates of this kind are now rarely prescribed and it is also listed as illicit in some contexts.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409942](https://www.wikidata.org/wiki/Q409942) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:21 | 3:19 | 0/0/0 | 0/0/0 | 0/0/0 | 274,555/1,089 | ollama / glm-5.3-flash | 8 | 4/4 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=talbutal) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (positive allosteric modulator), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GABRG3 (modulator), GRIA2 (target), GRIK2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 117 matched, 10 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Briquet_2026 | irrelevant | 0 | 0 | This is a population-PK study of meropenem, not talbutal; talbutal is not mentioned at all. |
| popPK | Furtado_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of HDAC inhibitors for glioma; talbutal is not mentioned and no PK parameters for it appear. |
| popPK | Haymer_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry CB2 agonist SAR paper about amprenavir analogues; talbutal is not mentioned and no talbutal PK parameters appear. |
| popPK | Helal_2026 | irrelevant | 0 | 0 | This is a breast cancer tumor-on-chip drug response study with no talbutal PK parameters or any pharmacokinetic modeling of talbutal. |
| popPK | Inganäs_2025 | irrelevant | 0 | 0 | The paper is about PROTAC membrane interactions and permeability; talbutal is not mentioned and no PK parameters for it appear. |
| popPK | Iuga_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry study of SARS-CoV-2 PLpro inhibitors; talbutal is not mentioned and no PK parameters appear. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | No talbutal PK parameters; paper is about SHIP1 ligands with only qualitative brain exposure mention. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on covalent BMX kinase inhibitors; talbutal is not mentioned and no PK parameters for it appear. |
| popPK | Nasr_2026 | irrelevant | 0 | 0 | This is an in vitro anticancer/drug-design study of thiazole EGFR/CDK-2 inhibitors with no talbutal PK data; only in silico ADMET predictions are mentioned. |
| popPK | Sultan_2025 | irrelevant | 0 | 0 | This is a synthesis/biological evaluation paper of fusidic acid crown ethers with no talbutal PK data whatsoever. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
