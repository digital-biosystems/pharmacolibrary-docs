<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;regorafenib&quot;}]"></div>

# regorafenib

- **generic name:** regorafenib
- **ATC codes:** `L01EX05`
- **DrugBank:** [DB08896](https://go.drugbank.com/drugs/DB08896) · **PubChem:** [CID 11167602](https://pubchem.ncbi.nlm.nih.gov/compound/11167602)
- **molar mass:** 482.815 g/mol (C21H15ClF4N4O3) — DrugBank
- **groups:** approved, investigational

## About

Regorafenib is a protein kinase inhibitor used to treat colorectal cancer and gastrointestinal stromal tumours. It is authorised in the European Union for colorectal cancer and remains in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3891664](https://www.wikidata.org/wiki/Q3891664) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| regorafenib | parent | 482.815 | C21H15ClF4N4O3 | DrugBank | [11167602](https://pubchem.ncbi.nlm.nih.gov/compound/11167602) | Casanova_2023, Fu_2019, Keunecke_2020, Schmulenson_2022 |
| 5'-deoxy-5-fluorocytidine (DFCR) | metabolite | — (mass units only) | — | — | — | — |
| 5'-deoxy-5-fluorouridine (DFUR) | metabolite | — (mass units only) | — | — | — | — |
| M-5 | metabolite | — (mass units only) | — | — | — | — |
| regorafenib-glucuronide | metabolite | — (mass units only) | — | — | — | — |
| regorafenib-N-oxide (M-2) | metabolite | 498.817 | C21H15ClF4N4O4 | PubChem | [53491674](https://pubchem.ncbi.nlm.nih.gov/compound/53491674) | Fu_2019, Schmulenson_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:56 | 18:59 | 1/5/1 | 0/0/1 | 0/0/0 | 405,821/106,433 | openai / gpt-6-luna | 8 | 1/7 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Keunecke_2020_reference](drugs/drug_regorafenib/Regorafenib_Keunecke2020_reference.md) | model (no simulator) | 3-compartment general linear | 13 (+4 cov.) | Keunecke A et al., Population pharmacokinetics of regorafe…, British journal of clinical… (2020) | [10.1111/bcp.14334](https://doi.org/10.1111/bcp.14334) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub><br><sub>route_to: `human_review`</sub> | [Casanova_2023_reference](drugs/drug_regorafenib/Regorafenib_Casanova2023_reference.md) | — | 1-compartment (no model) | 4 | Casanova M et al., Regorafenib plus Vincristine and Irinot…, Clinical cancer research :… (2023) | [10.1158/1078-0432.CCR-23-0257](https://doi.org/10.1158/1078-0432.CCR-23-0257) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Fu_2019_estimate](drugs/drug_regorafenib/Regorafenib_Fu2019_estimate.md) | — | general linear (no model) | 7 | Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019) | [10.1111/cts.12630](https://doi.org/10.1111/cts.12630) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fu_2019_regorafenib_glucuronide](drugs/drug_regorafenib/Regorafenib_Fu2019_regorafenib_glucuronide.md) | — | general linear (no model) | 5 | Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019) | [10.1111/cts.12630](https://doi.org/10.1111/cts.12630) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fu_2019_regorafenib_n_oxide](drugs/drug_regorafenib/Regorafenib_Fu2019_regorafenib_n_oxide.md) | — | general linear (no model) | 5 | Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019) | [10.1111/cts.12630](https://doi.org/10.1111/cts.12630) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Fu_2019_regorafinib](drugs/drug_regorafenib/Regorafenib_Fu2019_regorafinib.md) | — | general linear (no model) | 6 | Fu Q et al., Interaction Between Sex and Organic Ani…, Clinical and translational… (2019) | [10.1111/cts.12630](https://doi.org/10.1111/cts.12630) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Schmulenson_2022_reference](drugs/drug_regorafenib/Regorafenib_Schmulenson2022_reference.md) | — | general linear (no model) | 12 | Schmulenson E et al., Population pharmacokinetic analyses of…, British journal of clinical… (2022) | [10.1111/bcp.15461](https://doi.org/10.1111/bcp.15461) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Solms_2017_OS](drugs/drug_regorafenib/pd_Solms_2017_OS.md) | overall survival ← regorafenib · time-to-event model | — | Solms A et al., Exposure-response relationship of regor…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.05.050](https://doi.org/10.1016/j.ejps.2017.05.050) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Solms_2017_TTP](drugs/drug_regorafenib/pd_Solms_2017_TTP.md) | time-to-progression ← regorafenib · time-to-event model | — | Solms A et al., Exposure-response relationship of regor…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.05.050](https://doi.org/10.1016/j.ejps.2017.05.050) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=regorafenib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor, `UGT1A9` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (inhibitor), BRAF (inhibitor), CSF1R (inhibitor), DDR2 (inhibitor), EPHA2 (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FLT1 (inhibitor), FLT4 (inhibitor), FRK (inhibitor), KDR (inhibitor), KIT (inhibitor), MAPK11 (inhibitor), NTRK1 (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), RAF1 (inhibitor), RET (inhibitor), TEK (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 13 matched, 13 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 7  ·  extracted 1  ·  needs_review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Geoerger_2021.pdf` | Geoerger B et al., Phase 1 dose-escalation and pharmacokin…, European journal of cancer… (2021) | popPK | 9 | [10.1016/j.ejca.2021.05.023](https://doi.org/10.1016/j.ejca.2021.05.023) | [34157616](https://pubmed.ncbi.nlm.nih.gov/34157616) | The study uses a population PK model, but no numeric disposition parameter values are provided in the evidence. |

<sub>queue written 2026-10-07T05:38:52.929898+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Geoerger_2021 | relevant | 9 | 1 | The study uses a population PK model, but no numeric disposition parameter values are provided in the evidence. |
| popPK | He_2023 | irrelevant | 0 | 0 | Regorafenib is only a screening hit; no pharmacokinetic parameters or values are reported. |
| popPK | Kojima_2021 | irrelevant | 1 | 0 | The study examines in-vitro oxidative metabolism, not quantitative disposition parameters, and no numeric values are provided. |
| popPK | Modest_2025 | irrelevant | 0 | 0 | This is a human quality-of-life analysis with regorafenib only as a comparator and no regorafenib pharmacokinetic parameters. |
| popPK | Solms_2017 | irrelevant | 1 | 0 | This is an exposure-response analysis and reports no quantitative regorafenib disposition parameters. |
| popPK | Szkutnik-Fiedler_2024_2 | relevant | 9 | 4 | Rat pharmacokinetics of regorafenib are reported, but absolute parameter values appear to be in Table 1, which is not provided; only fold changes are readable. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:40 UTC</sub>
