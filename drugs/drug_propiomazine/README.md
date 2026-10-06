<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N05C&quot;,&quot;href&quot;:&quot;atc/N05C.md&quot;},{&quot;label&quot;:&quot;propiomazine&quot;}]"></div>

# propiomazine

- **generic name:** propiomazine
- **ATC codes:** `N05CM06`
- **DrugBank:** [DB00777](https://go.drugbank.com/drugs/DB00777) · **PubChem:** [CID 4940](https://pubchem.ncbi.nlm.nih.gov/compound/4940)
- **molar mass:** 340.482 g/mol (C20H24N2OS) — DrugBank
- **groups:** approved

## About

Propiomazine is a sedative antihistamine used to treat insomnia. It is an approved hypnotic, classified among other hypnotics and sedatives, and is not authorised centrally in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7250328](https://www.wikidata.org/wiki/Q7250328) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 20:48 | 2:58 | 0/0/0 | 0/0/0 | 0/0/0 | 258,076/1,024 | ollama / glm-5.3-flash | 8 | 5/3 | 8/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=propiomazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ADRA1A (target), CHRM1 (target), DRD2 (target), HRH1 (target), HTR2A (target), HTR2C (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 35 matched, 12 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beffinger_2025 | irrelevant | 0 | 0 | This is a study of IL-12Fc fusion cytokine PK in mice; propiomazine is not mentioned at all. |
| popPK | Braun_2026 | irrelevant | 0 | 0 | This is a biomaterials/hydrogel study about lactate-gated alginate crosslinking; propiomazine and any pharmacokinetic parameters are entirely absent. |
| popPK | Havelkova_2026 | irrelevant | 0 | 0 | This is an in vitro polymer-drug conjugation/cytotoxicity study of buparlisib, not propiomazine, with no PK disposition parameters. |
| popPK | Jesudason_2026 | irrelevant | 0 | 0 | No propiomazine PK parameters; paper is about SHIP1 ligands in Alzheimer's models with no quantitative disposition data. |
| popPK | Konig_2025 | irrelevant | 0 | 0 | This is an in vitro BBB delivery study for MAPT-ASO liposomes with no propiomazine PK parameters reported. |
| popPK | Liang_2026 | irrelevant | 0 | 0 | This is a medicinal chemistry paper on BMX kinase inhibitors; no propiomazine PK parameters are reported. |
| popPK | M_2026 | irrelevant | 0 | 0 | The paper is about synthesis and antioxidant activity of cyclic dipeptides, with no pharmacokinetic data for propiomazine. |
| popPK | Rodallec_2026 | irrelevant | 0 | 0 | This is a population PK/PD study of paclitaxel-polyacrylamide prodrug in mice, not propiomazine; parameter values are in supplementary tables anyway. |
| popPK | Segneanu_2026 | irrelevant | 0 | 0 | This is a review of plant-derived nanocarriers with no propiomazine PK parameters or numeric disposition values anywhere in the evidence. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | This is a protein bioconjugation chemistry paper with no propiomazine PK data or parameters of any kind. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
