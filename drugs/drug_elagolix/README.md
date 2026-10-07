<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;H01C&quot;,&quot;href&quot;:&quot;atc/H01C.md&quot;},{&quot;label&quot;:&quot;elagolix&quot;}]"></div>

# elagolix

- **generic name:** elagolix
- **ATC codes:** `H01CC03`
- **DrugBank:** [DB11979](https://go.drugbank.com/drugs/DB11979) · **PubChem:** [CID 11250647](https://pubchem.ncbi.nlm.nih.gov/compound/11250647)
- **molar mass:** 631.6 g/mol (C32H30F5N3O5) — DrugBank
- **groups:** approved, investigational

## About

Elagolix is a hormone-lowering medicine used to treat endometriosis. It is an approved medicine, mainly used in the United States, and has also been studied for other conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098999](https://www.wikidata.org/wiki/Q21098999) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| elagolix | parent | 631.6 | C32H30F5N3O5 | DrugBank | [11250647](https://pubchem.ncbi.nlm.nih.gov/compound/11250647) | Beck_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 09:20 | 2:38 | 0/1/0 | 2/0/0 | 0/0/0 | 156,067/9,693 | einfracz / qwen3.8-27b | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Beck_2022_reference](drugs/drug_elagolix/Elagolix_Beck2022_reference.md) | — | 2-compartment (no model) | 6 (+1 cov.) | Beck D et al., Population Pharmacokinetics of Elagolix…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01096-w](https://doi.org/10.1007/s40262-021-01096-w) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Abbas_2020_BMD](drugs/drug_elagolix/pd_Abbas_2020_BMD.md) | lumbar spine BMD ← elagolix · indirect response — drug stimulates the loss of lumbar spine BMD | — | Abbas Suleiman A et al., Exposure-Safety Analyses Identify Predi…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12560](https://doi.org/10.1002/psp4.12560) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Winzenborg_2021_BMD](drugs/drug_elagolix/pd_Winzenborg_2021_BMD.md) | bone mineral density (BMD) loss ← elagolix · indirect response — drug inhibits the production of bone mineral density (BMD) loss | — | Winzenborg I et al., A Personalized Medicine Approach Using…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12570](https://doi.org/10.1002/psp4.12570) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Winzenborg_2021_DYSM](drugs/drug_elagolix/pd_Winzenborg_2021_DYSM.md) | dysmenorrhea (DYSM) responder rates ← elagolix · categorical (graded) response model | — | Winzenborg I et al., A Personalized Medicine Approach Using…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12570](https://doi.org/10.1002/psp4.12570) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Winzenborg_2021_DYSP](drugs/drug_elagolix/pd_Winzenborg_2021_DYSP.md) | dyspareunia (DYSP) responder rates ← elagolix · categorical (graded) response model | — | Winzenborg I et al., A Personalized Medicine Approach Using…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12570](https://doi.org/10.1002/psp4.12570) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Winzenborg_2021_HF](drugs/drug_elagolix/pd_Winzenborg_2021_HF.md) | incidence of hot flashes ← elagolix · categorical (graded) response model | — | Winzenborg I et al., A Personalized Medicine Approach Using…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12570](https://doi.org/10.1002/psp4.12570) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Winzenborg_2021_NMPP](drugs/drug_elagolix/pd_Winzenborg_2021_NMPP.md) | nonmenstrual pelvic pain (NMPP) responder rates ← elagolix · categorical (graded) response model | — | Winzenborg I et al., A Personalized Medicine Approach Using…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12570](https://doi.org/10.1002/psp4.12570) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=elagolix) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` substrate, `CYP3A4` substrate, `SLCO1B1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | liver | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GNRHR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Winzenborg_2018.pdf` | Winzenborg I et al., Population Pharmacokinetics of Elagolix…, Clinical pharmacokinetics (2018) | popPK | 10 | [10.1007/s40262-018-0629-6](https://doi.org/10.1007/s40262-018-0629-6) | [29476499](https://pubmed.ncbi.nlm.nih.gov/29476499) | The paper reports a population pharmacokinetic model for elagolix, but the specific numeric parameter values are not included in the provided evidence. |

<sub>queue written 2026-10-07T09:18:22.047671+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbas_2020 | relevant | 5 | 3 | The paper is an exposure-response study that incorporates a population PK model for elagolix, and it explicitly states the apparent clearance (118 L/h), IIV (42.5%), and half-life (~4-6 hours), though it references a previous publication for the full PK model details. |
| popPK | Barry_2025 | irrelevant | 5 | 2 | The paper is a methodological study on matching controls in organ impairment studies; while it develops a population PK model for elagolix, the specific quantitative parameter estimates (CL, V, etc.) are not reported in the provided text, only geometric mean ratios of exposure metrics. |
| popPK | Ciceri_2024 | irrelevant | 0 | 0 | The paper focuses on in vitro pharmacodynamic activity (EC50), structure-activity relationships, and molecular docking of elagolix analogs, reporting no pharmacokinetic disposition parameters. |
| popPK | Winzenborg_2018 | relevant | 10 | 0 | The paper reports a population pharmacokinetic model for elagolix, but the specific numeric parameter values are not included in the provided evidence. |
| popPK | Winzenborg_2020 | irrelevant | 2 | 1 | The paper focuses on exposure-efficacy Markov modeling for clinical pain outcomes, not a pharmacokinetic disposition study, and lacks quantitative PK parameters like clearance or volume of distribution. |
| popPK | Winzenborg_2021 | irrelevant | 0 | 0 | The paper is a clinical utility/index modeling study using previously published PK parameters and does not report original quantitative pharmacokinetic parameter estimates for elagolix. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 09:18 UTC</sub>
