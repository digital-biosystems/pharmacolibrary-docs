<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;moclobemide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Moclobemide_Gwka2019_reference&quot;,&quot;label&quot;:&quot;G\u0142\u00f3wka_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Moclobemide_Raaflaub1984_reference&quot;,&quot;label&quot;:&quot;Raaflaub_1984_reference&quot;,&quot;href&quot;:&quot;drugs/drug_moclobemide/Moclobemide_Raaflaub1984_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# moclobemide

- **generic name:** moclobemide
- **ATC codes:** `N06AG02`
- **DrugBank:** [DB01171](https://go.drugbank.com/drugs/DB01171)
- **groups:** approved, investigational

## About

**Description.** A reversible monoamine oxidase inhibitor (MAOI) selective for isoform A (RIMA) used to treat major depressive disorder. Most meta-analyses and most studies indicate that in the acute management of depression, moclobemide is more efficacious than placebo medication and similarly efficacious as tricyclic antidepressants (TCA) or selective serotonin reuptake inhibitors (SSRIs).  Due to negligible anticholinergic and antihistaminic actions, moclobemide has been better tolerated than tri- or heterocyclic antidepressants [A31901].

**Indication.** For the treatment of major depressive disorder and bipolar disorder [A31901].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-24 00:56 | 4:01 | 1/0/1 | 0/0/0 | 0/0/0 | 73,061/6,734 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 3/0 | 3/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: T6_deviations</sub><br><sub>route_to: `engineer`</sub> | [Główka_2019_reference](drugs/drug_moclobemide/Moclobemide_Gwka2019_reference.md) | Główka FK et al., Bioavailability of moclobemide from two…, Die Pharmazie (2019) | [10.1691/ph.2019.8819](https://doi.org/10.1691/ph.2019.8819) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.4). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Raaflaub_1984_reference](drugs/drug_moclobemide/Moclobemide_Raaflaub1984_reference.md) | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=moclobemide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>“…of food reduces the rate but not the extent of absorption. Hepatic first-pass metabolism r…”</sub> | prose |
| absorption | small intestine | <sub>“…Well absorbed from the gastrointestinal tract (&gt; 95%). The presence of food reduces the ra…”</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target, `MAOB` inhibitor/target | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor/substrate, `CYP2C9` substrate, `CYP2D6` inhibitor/substrate, `MAOA` inhibitor/target | DrugBank actor |
| metabolism | platelet | `MAOB` inhibitor/target | DrugBank actor |
| metabolism | small intestine | `MAOA` inhibitor/target | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Raaflaub_1984.pdf` | Raaflaub J et al., Single-dose pharmacokinetics of the MAO…, Arzneimittel-Forschung (1984) | popPK | 10 | not captured | [6538424](https://pubmed.ncbi.nlm.nih.gov/6538424) | The paper reports quantitative PK parameters (t1/2, Vss, bioavailability) for moclobemide in humans with specific numeric ranges provided in the text. |

<sub>queue written 2026-09-24T00:52:35.092093+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baumann_1996_2 | irrelevant | 0 | 0 | The paper is a review of SSRIs and only mentions moclobemide in the context of drug interactions, without reporting any quantitative pharmacokinetic parameters for moclobemide. |
| PD | Baumann_1996_2 | not_relevant | 0 | 0 | The text is a review of SSRIs and mentions moclobemide only in the context of drug interactions and safety, without reporting any pharmacodynamic or exposure-response data. |
| popPK | Birkett_1995 | irrelevant | 0 | 0 | The paper models market uptake (utilization) of drugs, not pharmacokinetic disposition parameters. |
| PD | Birkett_1995 | not_relevant | 0 | 0 | The paper applies a sigmoid Emax model to market uptake (utilization over time) data, not pharmacodynamic exposure-response or dose-response relationships. |
| popPK | Boland_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection where moclobemide is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Boland_2003 | not_relevant | 0 | 0 | The paper reports that moclobemide was ineffective in the cell survival assay, providing no numeric PD parameters or concentration-effect relationship for the drug. |
| popPK | Cooper_2023 | irrelevant | 0 | 0 | The study is a toxicology cohort analysis where moclobemide is a co-ingested comparator, and no pharmacokinetic parameters are reported. |
| popPK | Dingemanse_1996 | irrelevant | not captured | not captured | no extractable full text |
| popPK | Dingemanse_1996_2 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic interactions and qualitative PK changes without reporting specific quantitative disposition parameters (CL, V, etc.) for moclobemide in the provided evidence. |
| PD | Dingemanse_1996_2 | not_relevant | 3 | 2 | The study reports qualitative PD interactions and changes in biomarkers (DHPG, serotonin) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model. |
| popPK | Fox_2010 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sumatriptan, with moclobemide serving only as a co-administered MAO-A inhibitor to assess interaction effects, not as the subject drug. |
| popPK | Ginovart_2006 | relevant | 7 | 3 | This is a human PET population/compartmental PK modeling study of moclobemide effects on [11C]-harmine, but the actual moclobemide PK parameter values are not shown here and seem to be absent from the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-24 00:52 UTC</sub>
