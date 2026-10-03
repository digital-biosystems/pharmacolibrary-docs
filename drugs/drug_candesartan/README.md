<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09C&quot;,&quot;href&quot;:&quot;atc/C09C.md&quot;},{&quot;label&quot;:&quot;candesartan&quot;}]"></div>

# candesartan

- **generic name:** candesartan
- **ATC codes:** `C09CA06`, `C09DA06`, `C09DB07`, `C10BX19`
- **DrugBank:** [DB13919](https://go.drugbank.com/drugs/DB13919) · **PubChem:** [CID 2541](https://pubchem.ncbi.nlm.nih.gov/compound/2541)
- **molar mass:** 440.454 g/mol (C24H20N6O3) — DrugBank
- **groups:** investigational

## About

**Description.** Candesartan is an angiotensin-receptor blocker (ARB) that may be used alone or with other agents to treat hypertension. It is available as a prodrug in the form of [candesartan cilexetil].

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| candesartan | parent | 440.454 | C24H20N6O3 | DrugBank | [2541](https://pubchem.ncbi.nlm.nih.gov/compound/2541) | Kassem_2021, Pfister_1999 |
| candesartan cilexetil | metabolite | 610.671 | C33H34N6O6 | PubChem | [2540](https://pubchem.ncbi.nlm.nih.gov/compound/2540) | Pfister_1999 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 16:45 | 2:14 | 0/1/1 | 0/0/0 | 0/0/0 | 24,398/12,764 | openai / gpt-6-luna | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Kassem_2021_reference](drugs/drug_candesartan/Candesartan_Kassem2021_reference.md) | — | 1-compartment (no model) | 1 | Kassem I et al., Population Pharmacokinetics of Candesar…, Clinical and translational… (2021) | [10.1111/cts.12842](https://doi.org/10.1111/cts.12842) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Pfister_1999_reference](drugs/drug_candesartan/Candesartan_Pfister1999_reference.md) | — | 1-compartment (no model) | 1 | Pfister M et al., Pharmacokinetics and haemodynamics of c…, British journal of clinical… (1999) | [10.1046/j.1365-2125.1999.00939.x](https://doi.org/10.1046/j.1365-2125.1999.00939.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=candesartan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C8` inhibitor, `CYP2C9` inhibitor/substrate, `SLCO1B1` inhibitor, `UGT1A3` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: AGTR1 (target), PTGS1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 33 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kassem_2021.pdf` | Kassem I et al., Population Pharmacokinetics of Candesar…, Clinical and translational… (2021) | popPK | 10 | [10.1111/cts.12842](https://doi.org/10.1111/cts.12842) | [32702160](https://pubmed.ncbi.nlm.nih.gov/32702160) | The population-PK study reports numeric candesartan CL/F estimates directly in the evidence. |
| `Liu_2023.pdf` | Liu F et al., A novel method to estimate the absorpti…, Frontiers in pharmacology (2023) | popPK | 8 | [10.3389/fphar.2023.1087913](https://doi.org/10.3389/fphar.2023.1087913) | [37214472](https://pubmed.ncbi.nlm.nih.gov/37214472) | Candesartan cilexetil ka is estimated, but no numeric values are present in the supplied evidence. |

<sub>queue written 2026-09-30T16:44:49.154259+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Gleiter_2002 | irrelevant | 2 | 8 | This review includes readable numeric PK values, but no original population-PK analysis or parameter estimates. |
| popPK | Hajjar_2022 | irrelevant | 0 | 0 | This is a safety and biomarker trial, with no candesartan pharmacokinetic parameters or numeric disposition values reported. |
| popPK | Liu_2023 | relevant | 8 | 0 | Candesartan cilexetil ka is estimated, but no numeric values are present in the supplied evidence. |
| popPK | Lortie_2013 | irrelevant | 2 | 0 | This is a PET receptor-binding study of radiolabeled methyl-candesartan, and no numeric PK parameter values are provided. |
| popPK | Ren_2022 | irrelevant | 1 | 0 | This review mentions candesartan only in PD modeling and provides no numeric candesartan disposition parameters. |
| popPK | Sundström_2023 | irrelevant | 0 | 0 | The trial measures blood-pressure response, not candesartan pharmacokinetics, and reports no disposition parameter values. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 16:45 UTC</sub>
