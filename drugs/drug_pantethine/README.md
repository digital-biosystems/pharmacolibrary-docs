<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A11H&quot;,&quot;href&quot;:&quot;atc/A11H.md&quot;},{&quot;label&quot;:&quot;pantethine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pantethine_Wittwer1985_reference&quot;,&quot;label&quot;:&quot;Wittwer_1985_reference&quot;,&quot;href&quot;:&quot;drugs/drug_pantethine/Pantethine_Wittwer1985_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# pantethine

- **generic name:** pantethine
- **ATC codes:** `A11HA32`
- **DrugBank:** [DB11190](https://go.drugbank.com/drugs/DB11190)
- **groups:** approved

## About

**Description.** Pantethine is a naturally occurring compound synthesized in the body from pantothenic acid (vitamin B5) via addition of cysteamine. It consists of two molecules of pantetheine that form a dimer via disufide linkages, and acts as an intermediate in the production of Coenzyme A. Coenzyme A plays an essential role as a cofactor in the metabolism of lipids and carbohydrates including fatty acid oxidation, carbohydrate metabolism, pyruvate degradation, and amino acid catabolism [A27255]. Pantethine is available as a dietary supplement for lowering blood cholesterol and triglycerides.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 22:55 | 2:10 | 0/1/0 | 0/0/0 | 0/0/0 | 46,560/1,352 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Wittwer_1985_reference](drugs/drug_pantethine/Pantethine_Wittwer1985_reference.md) | Wittwer CT et al., Metabolism of pantethine in cystinosis, The Journal of clinical inv… (1985) | [10.1172/JCI112152](https://doi.org/10.1172/JCI112152) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Arsenio_1987 | not_relevant | 1 | 0 | The paper reports qualitative clinical outcomes (reduction in lipids) after a fixed dose but provides no concentration-effect data, PK/PD modeling, or numeric PD parameters. |
| PD | Donati_1986 | not_relevant | 1 | 0 | The paper reports clinical efficacy (lipid changes) in a small cohort but provides no concentration-effect data, dose-response curve, or numeric PD parameters (Emax, EC50, etc.). |
| PD | Eto_1987 | not_relevant | 2 | 1 | The paper reports clinical outcomes (changes in beta-TG and lipids) for two fixed doses but does not provide plasma concentration data or fit a pharmacodynamic model to derive numeric PD parameters like Emax or EC50. |
| PD | Gentili_1985 | not_relevant | 1 | 0 | The text provides only a qualitative summary of pharmacological effects (e.g., "more durable reduction," "more pronounced activity") without reporting any numeric concentration-effect data, dose-response curves, or PD parameters. |
| PD | Ligas_1983 | not_relevant | 0 | 0 | The text is a brief summary of a clinical trial reporting qualitative therapeutic outcomes and safety, with no mention of pharmacokinetic data, exposure-response analysis, or numeric pharmacodynamic parameters. |
| PD | Naruta_2001 | not_relevant | 1 | 0 | The paper reports qualitative effects of pantethine on lipid parameters in a mouse model but provides no concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Pereira_2024 | not_relevant | 0 | 0 | The paper investigates the therapeutic efficacy of pantethine in PKAN patients, not the pharmacokinetic or pharmacodynamic effects of genetic variants on pantethine metabolism. |
| PGx | Rothmann_2013 | not_relevant | 0 | 0 | The paper investigates the metabolic flexibility of CoA biosynthesis in E. coli using a synthetic analog, not the pharmacogenomics of pantethine in humans. |
| PGx | van_2017 | not_relevant | 0 | 0 | The paper investigates the neuroprotective effects of pantethine in an Alzheimer's disease model but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 22:53 UTC</sub>
