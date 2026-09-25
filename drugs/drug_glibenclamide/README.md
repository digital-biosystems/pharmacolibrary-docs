<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A10B&quot;,&quot;href&quot;:&quot;atc/A10B.md&quot;},{&quot;label&quot;:&quot;glibenclamide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Glibenclamide_Rambiritch2016v2_reference&quot;,&quot;label&quot;:&quot;Rambiritch_2016_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Rambiritch2016v2_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glibenclamide_Savic2007_lag&quot;,&quot;label&quot;:&quot;Savic_2007_lag&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Glibenclamide_Savic2007_transit&quot;,&quot;label&quot;:&quot;Savic_2007_transit&quot;,&quot;href&quot;:&quot;drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# glibenclamide

- **generic name:** glibenclamide
- **ATC codes:** `A10BB01`
- **DrugBank:** [DB01016](https://go.drugbank.com/drugs/DB01016)
- **groups:** approved, investigational

## About

**Description.** Glyburide is a second generation sulfonylurea used to treat patients with diabetes mellitus type II.[L8123] It is typically given to patients who cannot be managed with the standard first line therapy, [metformin].[L8123] Glyburide stimulates insulin secretion through the closure of ATP-sensitive potassium channels on beta cells, raising intracellular potassium and calcium ion concentrations.[A183617]

Glyburide was granted FDA approval on 1 May 1984.[L8117] A formulation with metformin was granted FDA approval on on 31 July 2000.[L8120]

**Indication.** Glyburide is indicated alone or as part of combination product with metformin, as an adjunct to diet and exercise, to improve glycemic control in adults with type 2 diabetes mellitus.[L8120,L8123]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 21:34 | 16:25 | 3/0/0 | 0/0/0 | 0/0/0 | 91,592/45,565 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 17/1 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Rambiritch_2016_2_reference](drugs/drug_glibenclamide/Glibenclamide_Rambiritch2016v2_reference.md) | Rambiritch (2016) | — |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Savic_2007_lag](drugs/drug_glibenclamide/Glibenclamide_Savic2007_lag.md) | Savic RM et al., Implementation of a transit compartment…, Journal of pharmacokinetics… (2007) | [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span><br><sub>blocking: model_quarantined: F, Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Savic_2007_transit](drugs/drug_glibenclamide/Glibenclamide_Savic2007_transit.md) | Savic RM et al., Implementation of a transit compartment…, Journal of pharmacokinetics… (2007) | [10.1007/s10928-007-9066-0](https://doi.org/10.1007/s10928-007-9066-0) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=glibenclamide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` substrate, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` substrate, `SLCO2B1` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` substrate, `SLC15A1` inhibitor, `SLCO1A2` inhibitor, `SLCO2B1` substrate | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` inhibitor | DrugBank actor |
| distribution | lung | `ABCC1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` substrate, `CYP3A7` substrate, `SLC22A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…reas, glyburide is 50% excreted in the urine and 50% in the feces.[L8123] Glyburide is mai…”</sub> | prose |
| excretion | kidney | `ABCC2` inhibitor, `SLC15A2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor/substrate, `ABCC2` inhibitor, `ABCC3` inhibitor | DrugBank actor |
| excretion | small intestine | `ABCC2` inhibitor, `ABCC3` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ABCA1 (inhibitor), ABCC8 (blocker), ABCC8 (modulator), ABCC9 (modulator), CFTR (target), CPT1A (inhibitor), KCNJ11 (inhibitor), TRPM4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 401 matched, 20 returned
- **screened:** 18  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 3  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Nardotto_2017 | irrelevant | 0 | 0 | Glibenclamide is only a co-administered drug in this study, which exclusively reports population pharmacokinetic parameters for carvedilol enantiomers and their metabolites. |
| popPK | Pearson_1985 | irrelevant | 3 | 5 | The paper is a narrative review summarizing literature ranges for half-life and volume of distribution rather than reporting original population PK parameters or primary study data tables. |
| popPK | Rambiritch_2016 | irrelevant | 3 | 7 | The study focuses on pharmacodynamic modeling and only cites a single clearance value from a prior publication rather than estimating original population PK parameters. |
| popPK | Vorasayan_2019 | irrelevant | 0 | 0 | This is a clinical neuroimaging study evaluating glibenclamide's effect on brain edema and contains no pharmacokinetic parameters or population-PK modeling data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-15 21:33 UTC</sub>
