<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B05C&quot;,&quot;href&quot;:&quot;atc/B05C.md&quot;},{&quot;label&quot;:&quot;Ethacridine&quot;}]"></div>

# Ethacridine

- **generic name:** Ethacridine
- **ATC codes:** `B05CA08`, `D08AA01`
- **DrugBank:** [DB13190](https://go.drugbank.com/drugs/DB13190)
- **groups:** investigational

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 07:00 | 2:28 | 0/0/0 | 2/1/0 | 0/0/0 | 112,071/1,592 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 1/4 | 3/2 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_Mpro_activity.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_infection_ratio.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2020](drugs/drug_ethacridine/pd_Li_2020_viral_titer.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, bioRxiv : the preprint serv… (2020) | [10.1101/2020.10.28.359042](https://doi.org/10.1101/2020.10.28.359042) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_Mpro_activity.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_viral_RNA_copies.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Li_2021](drugs/drug_ethacridine/pd_Li_2021_viral_titer.md) | Li X et al., Ethacridine inhibits SARS-CoV-2 by inac…, PLoS pathogens (2021) | [10.1371/journal.ppat.1009898](https://doi.org/10.1371/journal.ppat.1009898) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_IC50.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_bacterial_inhibition.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Akbar_2026](drugs/drug_ethacridine/pd_Akbar_2026_cytotoxicity.md) | Akbar N et al., Glucosamine functionalized multi-walled…, International microbiology… (2026) | [10.1007/s10123-026-00889-y](https://doi.org/10.1007/s10123-026-00889-y) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Akbar_2026 | irrelevant | 0 | 0 | The study focuses on the synthesis and in-vitro antibacterial efficacy of ethacridine-loaded nanocarriers, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Galli_2025 | irrelevant | 0 | 0 | The paper is a high-throughput screening study for anthelmintic activity where ethacridine is only one of many screened compounds, and it does not report any quantitative pharmacokinetic parameters (CL, V, etc.) for ethacridine. |
| PD | Galli_2025 | not_relevant | 0 | 0 | The paper reports EC50 values for flavonoids and other compounds, but does not contain any data or analysis for Ethacridine. |
| popPK | Kilgore_2024 | irrelevant | 0 | 0 | The paper is a mechanistic study on biomolecular condensates and small molecule partitioning, not a pharmacokinetic study, and ethacridine is only mentioned as a probe for subcellular localization without any PK parameters. |
| PD | Kilgore_2024 | not_relevant | 0 | 0 | The paper focuses on the physicochemical partitioning of small molecules into biomolecular condensates and does not report pharmacodynamic (exposure-response) or dose-response relationships for Ethacridine. |
| popPK | Li_2020 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of ethacridine against SARS-CoV-2 and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Li_2021 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral mechanism study reporting EC50/IC50 values, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| popPK | Rising_1978 | relevant | 8 | 4 | The study reports quantitative PK parameters (half-life ~15h, absorption &lt;0.1%) for ethacridine in dogs, but lacks explicit clearance or volume values. |
| popPK | Wachsman_1996 | irrelevant | 0 | 0 | The paper is a review on oxidative damage and apoptosis that mentions ethacridine only as a mechanistic inhibitor of poly ADP-ribose glycohydrolase, with no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
