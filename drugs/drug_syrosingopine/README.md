<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C02L&quot;,&quot;href&quot;:&quot;atc/C02L.md&quot;},{&quot;label&quot;:&quot;Syrosingopine&quot;}]"></div>

# Syrosingopine

- **generic name:** Syrosingopine
- **ATC codes:** `C02LA09`
- **DrugBank:** [DB19379](https://go.drugbank.com/drugs/DB19379) · **PubChem:** not captured
- **groups:** approved, withdrawn

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-28 03:09 | 8:00 | 0/0/0 | 0/0/0 | 0/0/0 | 10,376/1,190 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 13 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Humphrey_1978.pdf` | Humphrey PP, The effects of alpha-adrenoceptor antag…, British journal of pharmaco… (1978) | pd | 4 | [10.1111/j.1476-5381.1978.tb17281.x](https://doi.org/10.1111/j.1476-5381.1978.tb17281.x) | [28807](https://www.ncbi.nlm.nih.gov/pubmed/28807) | metadata signals extractable PD data (concentration-effect) |
| `Levin_1983.pdf` | Levin RJ et al., Rat endometrial bioelectric activity in…, The Journal of physiology (1983) | pd | 4 | [10.1113/jphysiol.1983.sp014591](https://doi.org/10.1113/jphysiol.1983.sp014591) | [6135798](https://www.ncbi.nlm.nih.gov/pubmed/6135798) | metadata signals extractable PD data (sigmoid) |

<sub>queue written 2026-09-28T03:08:49.350110+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barrett_1970 | irrelevant | 0 | 0 | Syrosingopine is used only as a catecholamine-depleting pretreatment agent in a pharmacodynamic study of beta-blockers, with no PK parameters reported. |
| PD | Barrett_1970 | not_relevant | 0 | 0 | Syrosingopine is used only as a catecholamine-depleting pretreatment agent; the paper reports dose-response curves for beta-adrenoceptor antagonists, not for Syrosingopine itself. |
| popPK | Bashir_2026 | irrelevant | 0 | 0 | The study focuses on the binding of Ganoderic Acid A to MCTs, using syrosingopine only as a reference inhibitor in docking simulations, and contains no pharmacokinetic parameters for syrosingopine. |
| PD | Bashir_2026 | not_relevant | 0 | 0 | The paper focuses on the binding of Ganoderic Acid A to MCTs, using Syrosingopine only as a reference ligand in docking simulations, and does not report any pharmacodynamic or exposure-response data for Syrosingopine. |
| popPK | Humphrey_1978 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Humphrey_1978 | not_relevant | 0 | 0 | The paper studies alpha-adrenoceptor antagonists on 5-HT responses in dog saphenous vein and does not mention Syrosingopine or report any PD parameters for it. |
| popPK | Levin_1983 | irrelevant | 0 | 0 | no_text gate: only 80 chars of text extracted (&lt; 400) |
| PD | Levin_1983 | not_relevant | 0 | 0 | The paper focuses on the effects of adrenaline on rat endometrial bioelectric activity and does not mention Syrosingopine or provide any PD parameters for it. |
| popPK | Lumley_1977 | irrelevant | 0 | 0 | The study focuses on the inotropic and chronotropic selectivity of dobutamine and dopamine, using syrosingopine only as a pretreatment agent to block indirect sympathomimetic effects, with no pharmacokinetic parameters reported. |
| PD | Lumley_1977 | not_relevant | 1 | 0 | The paper mentions syrosingopine only as a pretreatment agent to test the mechanism of dopamine's selectivity, but does not report any exposure-response or dose-response data, curves, or numeric PD parameters for syrosingopine itself. |
| popPK | Saavedra-García_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on cancer cell stress resolution and does not involve syrosingopine or pharmacokinetic parameters. |
| PD | Saavedra-García_2021 | not_relevant | 0 | 0 | The paper focuses on multiomics profiling of stress resolution in cancer cells and does not report any pharmacodynamic or exposure-response data for Syrosingopine. |
| popPK | Smith_1984 | irrelevant | 0 | 0 | Syrosingopine is used only as a pretreatment agent to block sympathetic tone in a pharmacodynamic study of ICI 118,587, with no PK parameters reported for syrosingopine. |
| PGx | Spinello_2024 | not_relevant | 0 | 0 | The paper investigates the antiviral mechanism of syrosingopine against SARS-CoV-2 in megakaryocytes and does not report any pharmacogenomic effects on its pharmacokinetic or pharmacodynamic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
