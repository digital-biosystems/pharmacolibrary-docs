<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C09A&quot;,&quot;href&quot;:&quot;atc/C09A.md&quot;},{&quot;label&quot;:&quot;moexipril&quot;}]"></div>

# moexipril

- **generic name:** moexipril
- **ATC codes:** `C09AA13`, `C09BA13`
- **DrugBank:** [DB00691](https://go.drugbank.com/drugs/DB00691) · **PubChem:** [CID 91270](https://pubchem.ncbi.nlm.nih.gov/compound/91270)
- **molar mass:** 498.5681 g/mol (C27H34N2O7) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Moexipril is a non-sulfhydryl containing precursor of the active angiotensin-converting enzyme (ACE) inhibitor moexiprilat. It is used to treat high blood pressure (hypertension). It works by relaxing blood vessels, causing them to widen. Lowering high blood pressure helps prevent strokes, heart attacks and kidney problems.

**Indication.** For the treatment of hypertension.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 23:34 | 0:47 | 0/0/0 | 0/0/0 | 0/0/0 | 2,356/507 | ollama / glm-5.3-flash | 0 | 2/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moexipril) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `SLC15A1` substrate | DrugBank actor |
| metabolism | liver | <sub>“…The liver is thought to be one site of conversion, but not the primary site.…”</sub> | prose |
| excretion | kidney | `SLC15A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 16 matched, 16 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cawello_2002.pdf` | Cawello W et al., Moexipril shows a long duration of acti…, International journal of cl… (2002) | popPK | 5 | [10.5414/cpp40009](https://doi.org/10.5414/cpp40009) | [11837383](https://pubmed.ncbi.nlm.nih.gov/11837383) | Original PK study of moexipril/moexiprilat with t½ (29–30 h), Cmax, AUC, tmax values present, but no CL/V/compartmental model parameters reported. |

<sub>queue written 2026-09-30T23:34:37.028966+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cabré_2026 | irrelevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no PK parameters for moexipril or any drug. |
| PD | Cabré_2026 | not_relevant | 0 | 0 | Narrative review of cardiovascular pharmacotherapy with no moexipril-specific PD or exposure-response data or parameters. |
| popPK | Cawello_2002 | relevant | 5 | 3 | Original PK study of moexipril/moexiprilat with t½ (29–30 h), Cmax, AUC, tmax values present, but no CL/V/compartmental model parameters reported. |
| popPK | Drayer_1995 | irrelevant | 1 | 0 | This is an antihypertensive efficacy trial with no PK parameters (CL, V, ka, half-life, or population-PK model) reported for moexipril. |
| popPK | Edling_1995 | irrelevant | 1 | 0 | This is a pharmacodynamic characterization of moexipril with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported. |
| popPK | Fernández-Llaneza_2025 | irrelevant | 0 | 0 | This is a drug-safety/AKI knowledge aggregation study with no pharmacokinetic parameters for moexipril; no numeric PK values are present. |
| PD | Fernández-Llaneza_2025 | not_relevant | 0 | 0 | This is a drug-safety knowledge aggregation study (AKI risk signals via RORs/ADE frequencies), with no concentration-effect or dose-response PD analysis or parameters for moexipril. |
| popPK | Ferry_1987 | irrelevant | 0 | 0 | The study concerns quinapril and its metabolite CI-928, not moexipril, and no numeric PK parameter values appear in the evidence. |
| popPK | Fiscon_2021 | irrelevant | 0 | 0 | Network-based drug repurposing study for COVID-19 with no pharmacokinetic parameters for moexipril (only mentioned indirectly via ACE-inhibitor class). |
| PD | Fiscon_2021 | not_relevant | 0 | 0 | Computational network-based drug repurposing study; no pharmacodynamic or exposure/dose-response data for moexipril or any drug. |
| popPK | Friehe_1997 | irrelevant | 1 | 0 | This is a pharmacodynamic/toxicology study with no PK disposition parameters (CL, V, ka, half-life, or PK model) reported for moexipril. |
| popPK | Song_2002 | irrelevant | 3 | 0 | This is a narrative review of ACE inhibitors including moexipril, but no numeric PK parameters (CL, V, t½, etc.) appear in the evidence. |
| PD | Song_2002 | not_relevant | 2 | 1 | A narrative review of ACE inhibitors; only qualitative statements (e.g., flat dose-response curves for ACE inhibitors) with no numeric PD parameters for moexipril. |
| popPK | Van_1993 | irrelevant | 2 | 1 | Moexipril is only the co-administered interacting drug; all PK parameters reported are for warfarin, with no moexipril disposition values. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
