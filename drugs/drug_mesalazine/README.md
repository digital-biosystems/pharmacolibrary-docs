<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;mesalazine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_nonmem_estimates&quot;,&quot;label&quot;:&quot;Cuffari_2016_nonmem_estimates&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md&quot;,&quot;status&quot;:&quot;not simulated&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Mesalazine_Cuffari2016_multimatrix_mesalamine&quot;,&quot;label&quot;:&quot;Cuffari_2016_multimatrix_mesalamine&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mesalazine

- **generic name:** mesalazine
- **ATC codes:** `A07EC02`
- **DrugBank:** [DB00244](https://go.drugbank.com/drugs/DB00244) · **PubChem:** [CID 4075](https://pubchem.ncbi.nlm.nih.gov/compound/4075)
- **molar mass:** 153.1354 g/mol (C7H7NO3) — DrugBank
- **groups:** approved, investigational

## About

Mesalazine (5-aminosalicylic acid) is an intestinal anti-inflammatory aminosalicylic acid used mainly to treat inflammatory bowel conditions such as ulcerative colitis, proctitis, and microscopic colitis. It is an approved medicine in widespread use, and is also being investigated for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412479](https://www.wikidata.org/wiki/Q412479) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| 5-ASA | parent | 153.135 | C7H7NO3 | DrugBank | [4075](https://pubchem.ncbi.nlm.nih.gov/compound/4075) | Cuffari_2016 |
| Ac-5-ASA | metabolite | 195.15 | — | the paper | — | Cuffari_2016 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-04 19:45 | 10:13 | 0/1/1 | 1/0/0 | 0/0/0 | 186,987/30,702 | ollama / qwen3.8:27b-mtp-q8_0 | 14 | 2/2 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">not simulated</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.357). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Cuffari_2016_nonmem_estimates](drugs/drug_mesalazine/Mesalazine_Cuffari2016_nonmem_estimates.md) | ▶ model + simulator | 1-compartment, oral | 8 (+6 cov.) | Cuffari C et al., Randomized clinical trial: pharmacokine…, Drug design, development an… (2016) | [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.25). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T1_tmax</sub><br><sub>route_to: `engineer`</sub> | [Cuffari_2016_multimatrix_mesalamine](drugs/drug_mesalazine/Mesalazine_Cuffari2016_multimatrix_mesalamine.md) | ▶ model + simulator | 1-compartment, IV | 2 | Cuffari C et al., Randomized clinical trial: pharmacokine…, Drug design, development an… (2016) | [10.2147/DDDT.S95316](https://doi.org/10.2147/DDDT.S95316) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span> | [Oliván-Viguera_2013_KCa3_1](drugs/drug_mesalazine/pd_Oliv_n_Viguera_2013_KCa3_1.md) | KCa3.1 current ← mesalamine · direct sigmoid Emax (Hill) effect | — | Oliván-Viguera A et al., Novel phenolic inhibitors of small/inte…, PloS one (2013) | [10.1371/journal.pone.0058614](https://doi.org/10.1371/journal.pone.0058614) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mesalazine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | `SLCO2B1` substrate | DrugBank actor |
| absorption | small intestine | `SLCO2B1` substrate | DrugBank actor |
| metabolism | blood | `NAT1` substrate | DrugBank actor |
| metabolism | liver | `NAT1` substrate, `SLCO1B1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ALOX5 (inhibitor), CHUK (inhibitor), IKBKB (inhibitor), NOS2 (inhibitor), PPARG (target), PTGS1 (inhibitor), PTGS2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 12  ·  **relevant:** 1
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Zhang_2022.pdf` | Zhang Y et al., Population pharmacokinetics and IVIVC f…, Journal of controlled relea… (2022) | popPK | 9 | [10.1016/j.jconrel.2022.04.024](https://doi.org/10.1016/j.jconrel.2022.04.024) | [35461968](https://pubmed.ncbi.nlm.nih.gov/35461968) | The study performs a population PK analysis of mesalazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports variability coefficients. |

<sub>queue written 2026-10-04T19:36:21.366646+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kumar_2021 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of intestinal transit and smooth muscle contractility, not a pharmacokinetic study, and mesalazine is used only as a reference drug. |
| PD | Kumar_2021 | not_relevant | 0 | 0 | The paper reports pharmacodynamic effects of roxithromycin and mesalazine on intestinal transit and cholinergic responsiveness (EC50 of acetylcholine), but does not report a concentration-effect or dose-response relationship for mesalazine itself (i.e., no mesalazine exposure linked to effect magnitude). |
| popPK | Lin_2021_2 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of azathioprine's metabolite (6-TGN), and mesalazine is only mentioned as a covariate affecting clearance, not as the subject drug. |
| popPK | Markopoulos_2015 | irrelevant | 1 | 0 | The study is an in-vitro dissolution and biorelevant media simulation study, not a pharmacokinetic study reporting quantitative disposition parameters (CL, V, etc.) for mesalazine. |
| popPK | Oliván-Viguera_2013 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and pharmacological investigation of KCa3.1 channel inhibition, not a pharmacokinetic study of mesalazine. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | The study focuses on the mechanism of action of bakuchiol for colitis, using mesalazine only as a clinical comparator without reporting any pharmacokinetic parameters for mesalazine. |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper reports an EC50 for bakuchiol, not mesalazine, and provides no exposure-response or dose-response data for mesalazine. |
| popPK | Yarlas_2018 | irrelevant | 0 | 0 | The paper is a clinical trial analyzing health-related quality of life and work outcomes in ulcerative colitis patients, containing no pharmacokinetic data or disposition parameters for mesalazine. |
| popPK | Zhang_2022 | relevant | 9 | 2 | The study performs a population PK analysis of mesalazine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided text, which only reports variability coefficients. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-04 19:36 UTC</sub>
