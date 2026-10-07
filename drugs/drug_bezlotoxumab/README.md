<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J06B&quot;,&quot;href&quot;:&quot;atc/J06B.md&quot;},{&quot;label&quot;:&quot;bezlotoxumab&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Bezlotoxumab_Yee2020_reference&quot;,&quot;label&quot;:&quot;Yee_2020_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# bezlotoxumab

- **generic name:** bezlotoxumab
- **ATC codes:** `J06BB21`, `J06BC03`
- **DrugBank:** [DB13140](https://go.drugbank.com/drugs/DB13140) · **PubChem:** not captured
- **groups:** approved

## About

Bezlotoxumab, a monoclonal antibody, is used to help prevent recurrence of Clostridioides difficile infection (pseudomembranous enterocolitis). It is approved and authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4900370](https://www.wikidata.org/wiki/Q4900370) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 15:59 | 0:30 | 1/1/0 | 0/0/1 | 0/0/0 | 55,515/1,931 | ollama / glm-5.3-flash | 5 | 2/3 | 4/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Yee_2020_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2020_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Yee_2019_reference](drugs/drug_bezlotoxumab/Bezlotoxumab_Yee2019_reference.md) | — | 1-compartment (no model) | 0 | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yee_2020_rCDI](drugs/drug_bezlotoxumab/pd_Yee_2020_rCDI.md) | recurrence of Clostridium difficile infection (time to event) ← bezlotoxumab · time-to-event model | — | Yee KL et al., A time-to-event analysis of the exposur…, Journal of pharmacokinetics… (2020) | [10.1007/s10928-019-09660-5](https://doi.org/10.1007/s10928-019-09660-5) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yee_2019.pdf` | Yee KL et al., Population Pharmacokinetics and Pharmac…, Antimicrobial agents and ch… (2019) | popPK | 10 | [10.1128/AAC.01971-18](https://doi.org/10.1128/AAC.01971-18) | [30455246](https://pubmed.ncbi.nlm.nih.gov/30455246) | A population PK two-compartment model for bezlotoxumab in humans is described, but no numeric parameter values (CL, V, t½) appear in the provided evidence. |
| `de_2023.pdf` | de Almeida C et al., Predicted Bezlotoxumab Exposure in Pati…, Clinical therapeutics (2023) | popPK | 8 | [10.1016/j.clinthera.2023.02.006](https://doi.org/10.1016/j.clinthera.2023.02.006) | [36906440](https://pubmed.ncbi.nlm.nih.gov/36906440) | Population PK modeling of bezlotoxumab in humans, but the evidence only reports a predicted exposure change (10.8%) with no CL/V or model parameter values, which likely reside in supplementary material not provided. |

<sub>queue written 2026-10-07T15:59:00.369358+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kinoshita_2018 | irrelevant | 3 | 2 | This is a drug review of bezlotoxumab's pharmacology/efficacy; only Cmax (169 µg/mL), AUC (52,000 µg·h/mL) and t1/2 (~18 d) are mentioned in passing, with no PK model or full parameter set (values largely in figures/supplements not provided). |
| popPK | Peng_2019 | irrelevant | 0 | 0 | In vitro DARPin antitoxin study; bezlotoxumab only appears as a potency comparator (EC50), with no PK/disposition parameters. |
| popPK | Peritore-Galve_2025 | irrelevant | 0 | 0 | This is an efficacy/neutralization study of AZD5148 vs bezlotoxumab in mice; no PK parameters (CL, V, half-life, population-PK model) for bezlotoxumab are reported. |
| popPK | Simeon_2019 | irrelevant | 0 | 0 | This is a DARPin antitoxin engineering study; bezlotoxumab is only a comparator in EC50 potency assays, with no PK parameters (CL, V, half-life with volume, or PK model) reported. |
| popPK | Yee_2019 | relevant | 10 | 3 | A population PK two-compartment model for bezlotoxumab in humans is described, but no numeric parameter values (CL, V, t½) appear in the provided evidence. |
| popPK | de_2023 | relevant | 8 | 3 | Population PK modeling of bezlotoxumab in humans, but the evidence only reports a predicted exposure change (10.8%) with no CL/V or model parameter values, which likely reside in supplementary material not provided. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 15:59 UTC</sub>
