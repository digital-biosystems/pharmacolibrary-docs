<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V04C&quot;,&quot;href&quot;:&quot;atc/V04C.md&quot;},{&quot;label&quot;:&quot;sincalide&quot;}]"></div>

# sincalide

- **generic name:** sincalide
- **ATC codes:** `V04CC03`
- **DrugBank:** [DB09142](https://go.drugbank.com/drugs/DB09142) · **PubChem:** [CID 9833444](https://pubchem.ncbi.nlm.nih.gov/compound/9833444)
- **groups:** approved

## About

Sincalide, a synthetic fragment of the hormone cholecystokinin, is used as a diagnostic agent in tests of bile duct patency. It is an approved diagnostic drug, but it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7521885](https://www.wikidata.org/wiki/Q7521885) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:33 | 0:59 | 0/0/0 | 2/0/0 | 0/0/0 | 125,615/2,045 | ollama / glm-5.3-flash | 7 | 1/6 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Roche_1989_3H_inositol_phosphates](drugs/drug_sincalide/pd_Roche_1989_3H_inositol_phosphates.md) | [3H]inositol phosphates cellular contents ← CCK-8 · direct Emax (saturable) effect | — | Roche S et al., Gastrin and CCK-8 induce inositol 1,4,5…, Biochimica et biophysica ac… (1989) | [10.1016/0167-4889(89)90228-0](https://doi.org/10.1016/0167-4889(89)90228-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Roche_1989_AP_uptake](drugs/drug_sincalide/pd_Roche_1989_AP_uptake.md) | [14C]aminopyrine (AP) uptake by parietal cells ← CCK-8 · direct Emax (saturable) effect | — | Roche S et al., Gastrin and CCK-8 induce inositol 1,4,5…, Biochimica et biophysica ac… (1989) | [10.1016/0167-4889(89)90228-0](https://doi.org/10.1016/0167-4889(89)90228-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Taghizadeh_2022_IP1](drugs/drug_sincalide/pd_Taghizadeh_2022_IP1.md) | IP1 production (fold difference over baseline) ← CCK-8 (sincalide) · direct Emax (saturable) effect | — | Taghizadeh MS et al., Discovery of the cyclotide caripe 11 as…, Scientific reports (2022) | [10.1038/s41598-022-13142-z](https://doi.org/10.1038/s41598-022-13142-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=sincalide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CCKAR (target), CCKBR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 92 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidi_2022 | irrelevant | 0 | 0 | In vitro study of phytocannabinoids in human gingival fibroblasts; no sincalide or PK parameters present. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | This is a pharmacology/mechanism study of coptisine in rats with no sincalide PK parameters reported. |
| popPK | El-Saber_2020 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of hydroxyurea and eflornithine against Babesia/Theileria; "CLF" is clofazimine, not sincalide, and no PK parameters for sincalide appear. |
| popPK | Franco_2023 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study of chloroquine and trastuzumab in JIMT-1 breast cancer cells; sincalide is not mentioned at all. |
| popPK | Hirsh_1998 | irrelevant | 0 | 0 | Study of CCK-8 effects on glucose absorption in perfused rat intestine; no sincalide PK parameters reported. |
| popPK | Lv_2024 | irrelevant | 0 | 0 | Network pharmacology study of Astragalus in Alzheimer's disease; no sincalide PK parameters reported anywhere. |
| popPK | Peng_2022 | irrelevant | 0 | 0 | This is an in vitro antioxidant/antitumor study of Camellia fascicularis leaf extracts; no sincalide PK parameters appear anywhere. |
| popPK | Roche_1989 | irrelevant | 0 | 0 | In-vitro rabbit parietal cell signaling study with CCK-8, not a PK study of sincalide and no disposition parameters. |
| popPK | Taghizadeh_2022 | irrelevant | 0 | 0 | This is an in-vitro pharmacology study of cyclotide peptides at the CCK2 receptor with no sincalide PK or disposition parameters. |
| popPK | Tang_2026 | irrelevant | 0 | 0 | The paper is about zidovudine (AZT) transport/phosphorylation kinetics; sincalide is never mentioned, so no sincalide PK parameters exist in the evidence. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | This is an anti-cancer efficacy study of MI-503 in osteosarcoma; sincalide is not mentioned and no PK disposition parameters are reported. |
| popPK | Yu_2023 | irrelevant | 0 | 0 | This is a mycotoxin (zearalenone) degradation/toxicity study with no sincalide PK data. |
| popPK | Zhao_2016 | irrelevant | 0 | 0 | This is a glucose metabolism/gene expression study in rheumatoid arthritis with no sincalide PK data or parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
