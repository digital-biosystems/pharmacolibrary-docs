<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A07E&quot;,&quot;href&quot;:&quot;atc/A07E.md&quot;},{&quot;label&quot;:&quot;betamethasone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Betamethasone_Schoenmakers2025_reference&quot;,&quot;label&quot;:&quot;Schoenmakers_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Schoenmakers2025_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Betamethasone_Krzyzanski2021v2_reference&quot;,&quot;label&quot;:&quot;Krzyzanski_2021_2_reference&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Betamethasone_Sullivan2026_reference&quot;,&quot;label&quot;:&quot;Sullivan_2026_reference&quot;,&quot;href&quot;:&quot;drugs/drug_betamethasone/Betamethasone_Sullivan2026_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# betamethasone

- **generic name:** betamethasone
- **ATC codes:** `A07EA04`, `C05AA05`, `D07AC01`, `D07BC01`, `D07CC01`, `D07XC01`, `H02AB01`, `R01AD06`, `R03BA04`, `S01BA06`, `S01BB04`, `S01CA05`, `S01CB04`, `S02BA07`, `S03BA03`, `S03CA06`
- **DrugBank:** [DB00443](https://go.drugbank.com/drugs/DB00443)
- **groups:** approved, investigational, vet_approved

## About

**Description.** Betamethasone is a long-acting corticosteroid with immunosuppressive and antiinflammatory properties.[A192444] It can be used topically to manage inflammatory skin conditions such as eczema, and parenterally to manage several disease states including autoimmune disorders.[A192444] Betamethasone has potent glucocorticoid activity and negligible mineralocorticoid activity.[A192444]

**Indication.** As a member of the corticosteroid family, betamethasone is indicated for the treatment of several inflammatory conditions. As topical monotherapy, betamethasone is indicated to relieve pruritic and inflammatory symptoms of corticosteroid-responsive-dermatoses.[L11991,L10782,L11997] Betamethasone can be used topically in combination with a vitamin D analog such as calcipotriene to treat plaque psoriasis.[L12000] The corticosteroid is also available as an injectable suspension and can be used to manage a range of inflammatory conditions including endocrine disorders, gastrointestinal disorders, and rheumatic disorders among other conditions.[L11994]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-22 04:49 | 2:53 | 0/2/1 | 0/0/0 | 0/0/0 | 47,484/7,335 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Schoenmakers_2025_reference](drugs/drug_betamethasone/Betamethasone_Schoenmakers2025_reference.md) | Schoenmakers S et al., Pharmacokinetics of betamethasone in pr…, British journal of clinical… (2025) | [10.1002/bcp.70035](https://doi.org/10.1002/bcp.70035) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Krzyzanski_2021_2_reference](drugs/drug_betamethasone/Betamethasone_Krzyzanski2021v2_reference.md) | Krzyzanski (2021) | — |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sullivan_2026_reference](drugs/drug_betamethasone/Betamethasone_Sullivan2026_reference.md) | Sullivan J et al., Pharmacokinetics and Anti-Inflammatory…, Journal of veterinary pharm… (2026) | [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=betamethasone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP2A6` inducer, `CYP2B6` inducer, `CYP2C19` inducer, `CYP2C8` inducer, `CYP2C9` inducer, `CYP3A4` inducer/substrate, `CYP3A5` inducer, `CYP3A7` unknown | DrugBank actor |
| metabolism | lung | `CYP1B1` inducer | DrugBank actor |
| metabolism | skin | `CYP1B1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/substrate, `CYP3A5` inducer | DrugBank actor |
| excretion | kidney | <sub>“…Corticosteroids are eliminated predominantly in the urine.[A187436]…”</sub> | prose |
| target | adipose tissue | `CYP19A1` inhibitor/substrate | DrugBank actor |
| target | ovary | `CYP19A1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: NR3C1 (target), SERPINA6 (unknown).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 28 matched, 19 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Foissac_2020.pdf` | Foissac F et al., Maternal Betamethasone for Prevention o…, Clinical pharmacology and t… (2020) | popPK | 10 | [10.1002/cpt.1887](https://doi.org/10.1002/cpt.1887) | [32394434](https://pubmed.ncbi.nlm.nih.gov/32394434) | The paper is a population PK study for betamethasone, but the specific numeric parameter values (CL, V, Q) are not listed in the provided abstract text, only qualitative descriptions and a transplacental transfer ratio. |
| `Schoenmakers_2025.pdf` | Schoenmakers S et al., Pharmacokinetics of betamethasone in pr…, British journal of clinical… (2025) | popPK | 10 | [10.1002/bcp.70035](https://doi.org/10.1002/bcp.70035) | [40083164](https://pubmed.ncbi.nlm.nih.gov/40083164) | The study reports a population PK model for betamethasone with specific numeric values for clearance (9.35 vs 15.78 L/h) and exposure (AUC) provided in the text. |
| `Zhang_2025.pdf` | Zhang C et al., Across-Species Meta-Analysis of Betamet…, Biopharmaceutics & drug dis… (2025) | popPK | 10 | [10.1002/bdd.70017](https://doi.org/10.1002/bdd.70017) | [41250930](https://pubmed.ncbi.nlm.nih.gov/41250930) | The paper is a highly relevant PK study for betamethasone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains summary statistics and model descriptions. |
| `unknown_2025.pdf` | unknown, Population pharmacokinetics and pharmac…, BMJ open (2025) | popPK | 10 | [10.1136/bmjopen-2024-096523](https://doi.org/10.1136/bmjopen-2024-096523) | [40484425](https://pubmed.ncbi.nlm.nih.gov/40484425) | The paper is a protocol for a population PK study of betamethasone, but it contains no quantitative parameter values as the study has not yet been conducted. |
| `Loo_1981.pdf` | Loo JC et al., Pharmacokinetic evaluation of betametha…, Biopharmaceutics & drug dis… (1981) | popPK | 9 | [10.1002/bdd.2510020307](https://doi.org/10.1002/bdd.2510020307) | [7295883](https://pubmed.ncbi.nlm.nih.gov/7295883) | The paper describes a human PK study of betamethasone using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| `Samtani_2005.pdf` | Samtani MN et al., Betamethasone pharmacokinetics after tw…, Drug metabolism and disposi… (2005) | popPK | 9 | [10.1124/dmd.105.004309](https://doi.org/10.1124/dmd.105.004309) | [15860658](https://pubmed.ncbi.nlm.nih.gov/15860658) | The study is a relevant animal PK study for betamethasone, but only half-lives are provided in the text while specific clearance and volume parameters are not explicitly listed in the evidence. |
| `Sullivan_2026.pdf` | Sullivan J et al., Pharmacokinetics and Anti-Inflammatory…, Journal of veterinary pharm… (2026) | popPK | 9 | [10.1111/jvp.70052](https://doi.org/10.1111/jvp.70052) | [41653445](https://pubmed.ncbi.nlm.nih.gov/41653445) | The study reports population PK parameters for betamethasone in horses, but specific clearance (CL) and volume (V) values are not explicitly listed in the provided text, only Cmax, Tmax, and half-life. |

<sub>queue written 2026-09-22T04:47:22.582943+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Foissac_2020 | relevant | 10 | 2 | The paper is a population PK study for betamethasone, but the specific numeric parameter values (CL, V, Q) are not listed in the provided abstract text, only qualitative descriptions and a transplacental transfer ratio. |
| popPK | Loo_1981 | relevant | 9 | 0 | The paper describes a human PK study of betamethasone using a one-compartment model, but the specific numeric parameter values (CL, V, ka, etc.) are not present in the provided evidence text. |
| popPK | Samtani_2005 | relevant | 9 | 2 | The study is a relevant animal PK study for betamethasone, but only half-lives are provided in the text while specific clearance and volume parameters are not explicitly listed in the evidence. |
| popPK | Zhang_2025 | relevant | 10 | 2 | The paper is a highly relevant PK study for betamethasone, but specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains summary statistics and model descriptions. |
| popPK | unknown_2025 | relevant | 10 | 0 | The paper is a protocol for a population PK study of betamethasone, but it contains no quantitative parameter values as the study has not yet been conducted. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-22 04:47 UTC</sub>
