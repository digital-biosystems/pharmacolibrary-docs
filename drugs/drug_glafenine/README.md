<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;glafenine&quot;}]"></div>

# glafenine

- **generic name:** glafenine
- **ATC codes:** `N02BG03`
- **DrugBank:** [DB08963](https://go.drugbank.com/drugs/DB08963)
- **groups:** approved, withdrawn

## About

**Description.** An anthranilic acid derivative with analgesic properties used for the relief of all types of pain. Glafenine is withdrawn from the American market.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 00:06 | 5:04 | 0/0/0 | 0/1/0 | 0/0/0 | 45,894/1,438 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 2/2 | 4/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.0). The first reading is what the record holds.">cross-check: disputed</span> | [Collier_1968](drugs/drug_glafenine/pd_Collier_1968_bronchoconstriction.md) | Collier HO et al., Antagonism by fenamates and like-acting…, British journal of pharmaco… (1968) | [10.1111/j.1476-5381.1968.tb07952.x](https://doi.org/10.1111/j.1476-5381.1968.tb07952.x) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Vermerie_1992.pdf` | Vermerie N et al., Pharmacokinetics of glafenine and glafe…, Fundamental & clinical phar… (1992) | popPK | 9 | [10.1111/j.1472-8206.1992.tb00112.x](https://doi.org/10.1111/j.1472-8206.1992.tb00112.x) | [1358775](https://pubmed.ncbi.nlm.nih.gov/1358775) | The study reports quantitative PK parameters (Tmax, Cmax, half-life) for glafenine in humans, though specific clearance and volume values are not explicitly listed in the text. |
| `Hu_2024.pdf` | Hu XM et al., Prediction of cytochrome P450-mediated…, Archives of toxicology (2024) | pd | 5 | [10.1007/s00204-024-03701-w](https://doi.org/10.1007/s00204-024-03701-w) | [38492097](https://www.ncbi.nlm.nih.gov/pubmed/38492097) | metadata signals extractable PD data (IC50) |
| `Chiu_2015.pdf` | Chiu AM et al., High Throughput Assay Identifies Glafen…, Investigative ophthalmology… (2015) | pd | 4 | [10.1167/iovs.15-17802](https://doi.org/10.1167/iovs.15-17802) | [26641551](https://www.ncbi.nlm.nih.gov/pubmed/26641551) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-21T00:06:14.483460+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Brogden_1986 | irrelevant | 1 | 0 | The paper is a general review of NSAIDs that mentions glafenine only in a broad class comparison without providing specific quantitative pharmacokinetic parameters for it. |
| popPK | Cheung_2015 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on MRP4 inhibitors and does not report pharmacokinetic parameters for glafenine. |
| popPK | Chiu_2015 | irrelevant | 0 | 0 | no_text gate: only 128 chars of text extracted (&lt; 400) |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study of bradykinin-induced bronchoconstriction in guinea pigs and does not report any pharmacokinetic parameters for glafenine. |
| PD | Collier_1968 | not_relevant | 3 | 2 | The paper reports a qualitative potency ranking and mentions dose-response curves for fenamates, but does not provide specific numeric PD parameters (e.g., EC50, Emax) for glafenine. |
| PGx | Duvignaud_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for treating SARS-CoV-2 and does not report pharmacogenomic effects on the PK/PD of glafenine. |
| popPK | Ennachachibi_1988 | irrelevant | 2 | 0 | The paper describes an analytical method for glafenine and mentions pharmacokinetic application, but the provided evidence contains no quantitative PK parameter values (CL, V, t1/2, etc.). |
| popPK | Hu_2024 | irrelevant | 0 | 0 | no_text gate: only 106 chars of text extracted (&lt; 400) |
| PD | Hu_2024 | not_relevant | 0 | 0 | The paper focuses on machine learning models for predicting CYP-mediated bioactivation and does not report pharmacodynamic or exposure-response relationships for glafenine. |
| popPK | Mallein_1966 | irrelevant | 0 | 0 | The paper studies glycerylaminophenaquine, not glafenine. |
| PGx | Selver_2011 | not_relevant | 0 | 0 | The paper uses glafenine as a tool compound to inhibit ABCG2 transport in cell cultures, not to study pharmacogenomic effects on its own PK/PD parameters. |
| popPK | Sperry_2023 | irrelevant | 0 | 0 | The paper focuses on statins and COVID-19, and does not mention glafenine or report any pharmacokinetic parameters for it. |
| PD | Sperry_2023 | not_relevant | 0 | 0 | The paper focuses on statins (simvastatin, atorvastatin, etc.) and does not mention or analyze glafenine. |
| PGx | Wen_2011 | not_relevant | 0 | 0 | The paper describes the metabolic bioactivation pathways of glafenine using recombinant enzymes and human liver microsomes, but it does not report any pharmacogenomic effects (gene variants) on PK or PD parameters in humans. |
| PGx | Zhang_2009 | not_relevant | 0 | 0 | The paper identifies glafenine as an ABCG2 inhibitor but does not report any pharmacogenomic effects (gene variants) on glafenine's PK or PD parameters. |
| popPK | unknown_2016 | irrelevant | 0 | 0 | no_text gate: only 300 chars of text extracted (&lt; 400) |
| PD | unknown_2016 | not_relevant | 0 | 0 | The provided text is only the title of a conference abstract collection and contains no specific data, models, or parameters for glafenine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
