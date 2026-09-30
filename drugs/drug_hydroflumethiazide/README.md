<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03A&quot;,&quot;href&quot;:&quot;atc/C03A.md&quot;},{&quot;label&quot;:&quot;hydroflumethiazide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroflumethiazide_Brrs1979_reference&quot;,&quot;label&quot;:&quot;Br\u00f8rs_1979_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroflumethiazide/Hydroflumethiazide_Brrs1979_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroflumethiazide_Yakatan1977_reference&quot;,&quot;label&quot;:&quot;Yakatan_1977_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroflumethiazide/Hydroflumethiazide_Yakatan1977_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# hydroflumethiazide

- **generic name:** hydroflumethiazide
- **ATC codes:** `C03AA02`, `C03AB02`
- **DrugBank:** [DB00774](https://go.drugbank.com/drugs/DB00774) · **PubChem:** [CID 3647](https://pubchem.ncbi.nlm.nih.gov/compound/3647)
- **molar mass:** 331.292 g/mol (C8H8F3N3O4S2) — DrugBank
- **groups:** approved, withdrawn

## About

**Description.** A thiazide diuretic with actions and uses similar to those of hydrochlorothiazide. (From Martindale, The Extra Pharmacopoeia, 30th ed, p822)

**Indication.** Used as adjunctive therapy in edema associated with congestive heart failure, hepatic cirrhosis, and corticosteroid and estrogen therapy. Also used in the management of hypertension either as the sole therapeutic agent or to enhance the effect of other antihypertensive drugs in the more severe forms of hypertension.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| hydroflumethiazide | parent | 331.292 | C8H8F3N3O4S2 | DrugBank | [3647](https://pubchem.ncbi.nlm.nih.gov/compound/3647) | Brørs_1979, Yakatan_1977 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 04:26 | 4:26 | 0/2/0 | 0/0/0 | 0/0/0 | 30,313/9,258 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Brørs_1979_reference](drugs/drug_hydroflumethiazide/Hydroflumethiazide_Brrs1979_reference.md) | — | 1-compartment (no model) | 1 | Brørs O et al., Distribution of elimination of hydroflu…, European journal of clinica… (1979) | [10.1007/BF00563119](https://doi.org/10.1007/BF00563119) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Yakatan_1977_reference](drugs/drug_hydroflumethiazide/Hydroflumethiazide_Yakatan1977_reference.md) | — | 1-compartment (no model) | 3 | Yakatan GJ et al., Pharmacokinetics of orally administered…, Journal of clinical pharmac… (1977) | [10.1002/j.1552-4604.1977.tb04584.x](https://doi.org/10.1002/j.1552-4604.1977.tb04584.x) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydroflumethiazide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…iazide is incompletely but fairly rapidly absorbed from the gastrointestinal tract…”</sub> | prose |
| distribution | blood | `ALB` binder | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor/substrate, `SLC22A8` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inducer), CA1 (inhibitor), CA12 (inhibitor), CA2 (inhibitor), CA4 (inhibitor), CA7 (inhibitor), CA9 (inhibitor), KCNMA1 (inducer), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yakatan_1977.pdf` | Yakatan GJ et al., Pharmacokinetics of orally administered…, Journal of clinical pharmac… (1977) | popPK | 10 | [10.1002/j.1552-4604.1977.tb04584.x](https://doi.org/10.1002/j.1552-4604.1977.tb04584.x) | [833338](https://pubmed.ncbi.nlm.nih.gov/833338) | The paper reports quantitative pharmacokinetic parameters (ka, kel, t1/2, AUC, renal clearance) for hydroflumethiazide in humans with all numeric values explicitly present in the text. |
| `Brørs_1979.pdf` | Brørs O et al., Distribution of elimination of hydroflu…, European journal of clinica… (1979) | popPK | 9 | [10.1007/BF00563119](https://doi.org/10.1007/BF00563119) | [499309](https://pubmed.ncbi.nlm.nih.gov/499309) | The paper reports quantitative pharmacokinetic parameters for hydroflumethiazide, including specific half-life values (0.26 h, 0.85 h, 5.2 h, 8.7 h, 17.9 h) and model structure (three-compartment), although clearance and volume values are described qualitatively rather than numerically. |

<sub>queue written 2026-09-28T04:23:24.468087+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Corrigan_1976 | not_relevant | 0 | 0 | The paper focuses on dissolution and bioavailability (PK) of hydrochlorothiazide/hydroflumethiazide formulations, with no pharmacodynamic or exposure-response analysis. |
| PD | Elkowitz_1979 | not_relevant | 1 | 0 | The paper is a retrospective clinical review reporting mean blood pressure reductions for a fixed-dose combination, but it does not provide concentration-effect data, dose-response curves, or specific PD parameters (Emax, EC50) for hydroflumethiazide. |
| PD | Finnerty_1979 | not_relevant | 1 | 0 | The paper reports clinical efficacy outcomes (percentage of patients achieving BP targets) for fixed-dose combination regimens but does not provide concentration-effect data, dose-response curves, or numeric PD parameters like Emax or EC50. |
| popPK | Kristensen_1975 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of methotrexate, with hydroflumethiazide mentioned only as a co-administered diuretic that did not affect the results. |
| popPK | Liu_1997 | irrelevant | 2 | 0 | The paper is a methodological study using hydroflumethiazide data only as a validation example, and no specific numeric PK parameter values are provided in the evidence. |
| PD | Maharaj_1993 | not_relevant | 0 | 0 | The paper is a clinical efficacy trial comparing two drug combinations, reporting only mean blood pressure changes and response rates without any pharmacokinetic data, concentration-effect analysis, or PD modeling. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-28 04:23 UTC</sub>
