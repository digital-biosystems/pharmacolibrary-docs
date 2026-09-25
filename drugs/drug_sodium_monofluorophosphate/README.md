<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;sodium monofluorophosphate&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;SodiumMonofluorophosphate_Setnikar1990_reference&quot;,&quot;label&quot;:&quot;Setnikar_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_sodium_monofluorophosphate/SodiumMonofluorophosphate_Setnikar1990_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# sodium monofluorophosphate

- **generic name:** sodium monofluorophosphate
- **ATC codes:** `A01AA02`, `A12CD02`
- **DrugBank:** [DB09484](https://go.drugbank.com/drugs/DB09484)
- **groups:** approved, investigational

## About

**Description.** Sodium monofluorophosphate is used in OTC dental preparations to help protect against cavities.

**Indication.** Sodium monofluorophosphate is indicated for the treatment of cavities

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 03:16 | 0:57 | 0/1/0 | 0/0/0 | 0/0/0 | 17,316/1,848 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Setnikar_1990_reference](drugs/drug_sodium_monofluorophosphate/SodiumMonofluorophosphate_Setnikar1990_reference.md) | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | — |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Setnikar_1990.pdf` | Setnikar I et al., Relative bioavailability of fluoride fr…, Arzneimittel-Forschung (1990) | popPK | 9 | not captured | [2346544](https://pubmed.ncbi.nlm.nih.gov/2346544) | The study reports quantitative pharmacokinetic parameters (Cmax, tmax, half-lives, AUC ratio) for sodium monofluorophosphate in humans, with values explicitly listed in the text. |
| `Vattikonda_1994.pdf` | Vattikonda CS et al., A biopharmaceutic approach in designing…, Biopharmaceutics & drug dis… (1994) | popPK | 8 | [10.1002/bdd.2510150806](https://doi.org/10.1002/bdd.2510150806) | [7888599](https://pubmed.ncbi.nlm.nih.gov/7888599) | The study reports PK parameters for sodium monofluorophosphate (specifically fluoride) in dogs, including a two-compartment model and bioavailability, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |

<sub>queue written 2026-09-18T03:15:56.340708+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | He_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study on gingivitis outcomes where sodium monofluorophosphate is used only as a negative control, and it contains no pharmacokinetic parameters. |
| PD | Kamotsay_2002 | not_relevant | 2 | 1 | The study reports qualitative growth inhibition and lack of bactericidal effect at various concentrations, but does not provide numeric PD parameters (e.g., IC50, Emax) or a fitted dose-response curve. |
| PD | Murray_1996 | not_relevant | 1 | 0 | The text is a consensus statement/review summarizing clinical outcomes and toxicity profiles without providing specific numeric pharmacodynamic parameters or exposure-response curves. |
| PD | Sebert_1995 | not_relevant | 2 | 1 | The paper reports a clinical efficacy study comparing two fixed doses (treatment vs placebo) but does not provide concentration-effect data, PK parameters, or a dose-response curve with numeric PD parameters like Emax or EC50. |
| PD | Stösser_1995 | not_relevant | 2 | 1 | The study reports qualitative dose-response trends (caries scores at 5, 10, 15 ppm) but explicitly states there was no remarkable influence of dosage, and no numeric PD parameters (Emax, EC50, etc.) are provided or derivable. |
| popPK | Vattikonda_1994 | relevant | 8 | 2 | The study reports PK parameters for sodium monofluorophosphate (specifically fluoride) in dogs, including a two-compartment model and bioavailability, but specific numeric values for clearance, volume, or half-life are not present in the provided text. |
| PD | Vattikonda_1994 | not_relevant | 0 | 0 | The paper focuses on PK and formulation design (bioavailability, release profiles) and does not report any pharmacodynamic or exposure-response data for sodium monofluorophosphate. |
| PD | Vattikonda_1994_2 | not_relevant | 0 | 0 | The paper focuses on PK (bioavailability, absorption sites) and formulation design, reporting no concentration-effect or dose-response data or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 03:16 UTC</sub>
