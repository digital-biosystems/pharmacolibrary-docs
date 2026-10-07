<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;tafenoquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Tafenoquine_CherkaouiRbati2023_reference&quot;,&quot;label&quot;:&quot;Cherkaoui-Rbati_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Tafenoquine_Watson2022_reference&quot;,&quot;label&quot;:&quot;Watson_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# tafenoquine

- **generic name:** tafenoquine
- **ATC codes:** `P01BA07`
- **DrugBank:** [DB06608](https://go.drugbank.com/drugs/DB06608) · **PubChem:** not captured
- **molar mass:** 463.501 g/mol (C24H28F3N3O3) — DrugBank
- **groups:** approved, investigational

## About

Tafenoquine is an antimalarial drug used to treat or prevent malaria. It is an approved medicine, though its use appears limited rather than widespread.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2387553](https://www.wikidata.org/wiki/Q2387553) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| tafenoquine | parent | 463.501 | C24H28F3N3O3 | DrugBank | — | Bachhav_2023, Charles_2007, Edstein_2001, Thakkar_2018_2, Watson_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:57 | 5:06 | 2/3/2 | 1/0/1 | 0/0/0 | 233,775/18,443 | ollama / glm-5.3-flash | 16 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Cherkaoui-Rbati_2023_reference](drugs/drug_tafenoquine/Tafenoquine_CherkaouiRbati2023_reference.md) | ▶ model + simulator | 2-compartment, IV | 5 | Cherkaoui-Rbati MH et al., A pharmacokinetic-pharmacodynamic model…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12875](https://doi.org/10.1002/psp4.12875) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2022_reference](drugs/drug_tafenoquine/Tafenoquine_Watson2022_reference.md) | ▶ model + simulator | 2-compartment, oral | 7 | Watson JA et al., The clinical pharmacology of tafenoquin…, eLife 11 (2022) | [10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Charles_2007_reference](drugs/drug_tafenoquine/Tafenoquine_Charles2007_reference.md) | — | 1-compartment (no model) | 2 (+1 cov.) | Charles BG et al., Population pharmacokinetics of tafenoqu…, Antimicrobial agents and ch… (2007) | [10.1128/AAC.01183-06](https://doi.org/10.1128/AAC.01183-06) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Edstein_2001_reference](drugs/drug_tafenoquine/Tafenoquine_Edstein2001_reference.md) | — | 1-compartment (no model) | 2 | Edstein MD et al., Population pharmacokinetics of the new…, British journal of clinical… (2001) | [10.1046/j.0306-5251.2001.01482.x](https://doi.org/10.1046/j.0306-5251.2001.01482.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bachhav_2023_reference](drugs/drug_tafenoquine/Tafenoquine_Bachhav2023_reference.md) | — | 1-compartment (no model) | 4 | Bachhav SS et al., A pharmacometrics approach to assess th…, British journal of clinical… (2023) | [10.1111/bcp.15554](https://doi.org/10.1111/bcp.15554) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.30).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Santos_2024_reference](drugs/drug_tafenoquine/Tafenoquine_Santos2024_reference.md) | — | 1-compartment (no model) | 0 | Santos LO et al., Pharmacokinetic Models of Tafenoquine:…, Pharmaceutics (2024) | [10.3390/pharmaceutics16091124](https://doi.org/10.3390/pharmaceutics16091124) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Thakkar_2018_2_reference](drugs/drug_tafenoquine/Tafenoquine_Thakkar2018v2_reference.md) | — | 1-compartment (no model) | 7 | Thakkar N et al., Population Pharmacokinetics of Tafenoqu…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.00711-18](https://doi.org/10.1128/AAC.00711-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2022_recurrence](drugs/drug_tafenoquine/pd_Watson_2022_recurrence.md) | P. vivax recurrence within 4 months ← tafenoquine · direct Emax (saturable) effect | — | Watson JA et al., The clinical pharmacology of tafenoquin…, eLife 11 (2022) | [10.7554/eLife.83433](https://doi.org/10.7554/eLife.83433) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tenero_2015_relapse_free_at_6_months](drugs/drug_tafenoquine/pd_Tenero_2015_relapse_free_at_6_months.md) | relapse free at 6 months ← tafenoquine · categorical (graded) response model | — | Tenero D et al., Exposure-Response Analyses for Tafenoqu…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00718-15](https://doi.org/10.1128/AAC.00718-15) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Tenero_2015_time_to_relapse_of_the_infection](drugs/drug_tafenoquine/pd_Tenero_2015_time_to_relapse_of_the_infection.md) | time to relapse of the infection ← tafenoquine · time-to-event model | — | Tenero D et al., Exposure-Response Analyses for Tafenoqu…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.00718-15](https://doi.org/10.1128/AAC.00718-15) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=tafenoquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC22A2` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 6  ·  **relevant:** 6
- **records:** 7  ·  extracted 2  ·  needs_review 2  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bachhav_2023.pdf` | Bachhav SS et al., A pharmacometrics approach to assess th…, British journal of clinical… (2023) | popPK | 10 | [10.1111/bcp.15554](https://doi.org/10.1111/bcp.15554) | [36199201](https://pubmed.ncbi.nlm.nih.gov/36199201) | Human paediatric tafenoquine POPPK with two-compartment model and numeric CL (3.4 vs 3.7 L/h) and IIV reported directly in the abstract; full parameter table may be in supplementary but key values are present. |
| `Vélez_2022.pdf` | Vélez ID et al., Tafenoquine exposure assessment, safety…, The Lancet. Child & adolesc… (2022) | popPK | 8 | [10.1016/S2352-4642(21)00328-X](https://doi.org/10.1016/S2352-4642(21)00328-X) | [34871570](https://pubmed.ncbi.nlm.nih.gov/34871570) | A paediatric population-PK model of tafenoquine was developed, but only AUC exposures are given in the text; model parameters (CL, V, ka) likely reside in supplementary material not provided. |

<sub>queue written 2026-10-07T08:52:38.793394+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherkaoui-Rbati_2023 | irrelevant | 0 | 0 | The paper models DSM265, not tafenoquine; tafenoquine is only mentioned as a comparator prophylactic, and no tafenoquine PK parameters are reported. |
| popPK | Persoons_2021 | irrelevant | 0 | 0 | In-vitro antiviral study of quinoline analogues; tafenoquine is only a test compound with EC50 values, no PK/disposition parameters reported. |
| popPK | Ramharter_2002 | irrelevant | 0 | 0 | In vitro antimalarial efficacy study (EC50/EC90 against parasites), no pharmacokinetic disposition parameters for tafenoquine. |
| popPK | Tenero_2015 | irrelevant | 3 | 2 | This is an exposure-response (efficacy) analysis reporting AUC-based endpoints, not a population-PK model with CL/V/ka parameters; only AUC medians/breakpoints appear, no disposition parameters. |
| popPK | Vélez_2022 | relevant | 8 | 4 | A paediatric population-PK model of tafenoquine was developed, but only AUC exposures are given in the text; model parameters (CL, V, ka) likely reside in supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:53 UTC</sub>
