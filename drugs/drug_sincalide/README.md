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
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Roche_1989_3H_inositol_phosphates](drugs/drug_sincalide/pd_Roche_1989_3H_inositol_phosphates.md) | [3H]inositol phosphates cellular contents ← CCK-8 · direct Emax (saturable) effect | — | Roche S et al., Gastrin and CCK-8 induce inositol 1,4,5…, Biochimica et biophysica ac… (1989) | [10.1016/0167-4889(89)90228-0](https://doi.org/10.1016/0167-4889(89)90228-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Roche_1989_AP_uptake](drugs/drug_sincalide/pd_Roche_1989_AP_uptake.md) | [14C]aminopyrine (AP) uptake by parietal cells ← CCK-8 · direct Emax (saturable) effect | — | Roche S et al., Gastrin and CCK-8 induce inositol 1,4,5…, Biochimica et biophysica ac… (1989) | [10.1016/0167-4889(89)90228-0](https://doi.org/10.1016/0167-4889(89)90228-0) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Taghizadeh_2022_IP1](drugs/drug_sincalide/pd_Taghizadeh_2022_IP1.md) | IP1 production (fold difference over baseline) ← CCK-8 (sincalide) · direct Emax (saturable) effect | — | Taghizadeh MS et al., Discovery of the cyclotide caripe 11 as…, Scientific reports (2022) | [10.1038/s41598-022-13142-z](https://doi.org/10.1038/s41598-022-13142-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=sincalide).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `SLCO1B3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CCKAR (target), CCKBR (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
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
