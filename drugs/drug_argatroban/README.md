<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;argatroban&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Argatroban_Cox2004_reference&quot;,&quot;label&quot;:&quot;Cox_2004_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_argatroban/Argatroban_Cox2004_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Argatroban_Akimoto2011_reference&quot;,&quot;label&quot;:&quot;Akimoto_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_argatroban/Argatroban_Akimoto2011_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Cox_2004_ACT&quot;,&quot;label&quot;:&quot;Cox_2004 \u00b7 ACT&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_argatroban/pd_Cox_2004_ACT.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# argatroban

- **generic name:** argatroban
- **ATC codes:** `B01AE03`
- **DrugBank:** [DB00278](https://go.drugbank.com/drugs/DB00278) · **PubChem:** [CID 152951](https://pubchem.ncbi.nlm.nih.gov/compound/152951)
- **molar mass:** 508.64 g/mol (C23H36N6O5S) — DrugBank
- **groups:** approved, investigational

## About

Argatroban is a direct thrombin inhibitor used as an anticoagulant, mainly in patients who cannot receive heparin, such as those with heparin-induced thrombocytopenia. It is an approved anticoagulant that is used in clinical practice, though it is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074501](https://www.wikidata.org/wiki/Q27074501) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| argatroban | parent | 508.64 | C23H36N6O5S | DrugBank | [152951](https://pubchem.ncbi.nlm.nih.gov/compound/152951) | Akimoto_2011, Cox_2004 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-05 14:02 | 11:42 | 1/0/1 | 3/0/0 | 0/0/0 | 166,634/29,418 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 4/1 | 1/4 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span> | [Cox_2004_reference](drugs/drug_argatroban/Argatroban_Cox2004_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.733). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub><br><sub>blocking: T1_t_half_terminal</sub><br><sub>route_to: `scholar`</sub> | [Akimoto_2011_reference](drugs/drug_argatroban/Argatroban_Akimoto2011_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 (+1 cov.) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Akimoto_2011_ACT](drugs/drug_argatroban/pd_Akimoto_2011_ACT.md) | activated clotting time ← argatroban · direct sigmoid Emax (Hill) effect | model (no simulator) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Akimoto_2011_ECA_T](drugs/drug_argatroban/pd_Akimoto_2011_ECA_T.md) | ecarin time ← argatroban · direct Emax (saturable) effect | model (no simulator) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Akimoto_2011_PiCT](drugs/drug_argatroban/pd_Akimoto_2011_PiCT.md) | prothrombinase-induced clotting time ← argatroban · direct Emax (saturable) effect | model (no simulator) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> | [Akimoto_2011_aPTT](drugs/drug_argatroban/pd_Akimoto_2011_aPTT.md) | activated partial thromboplastin time ← argatroban · direct Emax (saturable) effect | model (no simulator) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chang_2016_thrombin_activity](drugs/drug_argatroban/pd_Chang_2016_thrombin_activity.md) | thrombin activity ← argatroban · direct sigmoid Emax (Hill) effect | — | Chang JB et al., A novel, rapid method to compare the th…, Scientific reports (2016) | [10.1038/srep29387](https://doi.org/10.1038/srep29387) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Cox_2004_ACT](drugs/drug_argatroban/pd_Cox_2004_ACT.md) | activated clotting time ← argatroban · direct sigmoid Emax (Hill) effect | ▶ model + simulator | Cox DS et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (2004) | [10.1177/0091270004267651](https://doi.org/10.1177/0091270004267651) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Akimoto_2011_ETP](drugs/drug_argatroban/pd_Akimoto_2011_ETP.md) | endogenous thrombin potential ← argatroban · direct sigmoid Emax (Hill) effect | model (no simulator) | Akimoto K et al., Anticoagulation with argatroban for ele…, Journal of clinical pharmac… (2011) | [10.1177/0091270010372627](https://doi.org/10.1177/0091270010372627) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=argatroban) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: F2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Ahmad_2000.pdf` | Ahmad S et al., Pharmacokinetics of argatroban in prima…, International angiology : a… (2000) | popPK | 8 | not captured | [10905795](https://pubmed.ncbi.nlm.nih.gov/10905795) | The study reports PK parameters for argatroban in primates, but specific numeric values for clearance or volume are not provided in the text, only qualitative descriptions and half-life ranges. |
| `Tran_1999.pdf` | Tran JQ et al., Assessment of the potential pharmacokin…, Journal of clinical pharmac… (1999) | pgx | 7 | not captured | [10234600](https://www.ncbi.nlm.nih.gov/pubmed/10234600) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-05T13:52:09.472140+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2000 | relevant | 8 | 2 | The study reports PK parameters for argatroban in primates, but specific numeric values for clearance or volume are not provided in the text, only qualitative descriptions and half-life ranges. |
| popPK | Chang_2016 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic assay measuring Hill coefficients and IC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Nowak_2009 | not_relevant | 0 | 0 | The text is a general overview of direct thrombin inhibitors and does not report any pharmacogenomic effects on argatroban's PK or PD parameters. |
| PGx | Scaglione_2013 | not_relevant | 0 | 0 | The paper is a review of oral anticoagulants (warfarin, rivaroxaban, apixaban, dabigatran) and does not report pharmacogenomic effects on the PK/PD of argatroban. |
| popPK | Sivaraja_2020 | irrelevant | 0 | 0 | The study focuses on the efficacy and mechanism of a new drug (VE-1902), using argatroban only as a comparator in in-vitro assays without reporting argatroban's pharmacokinetic parameters. |
| PD | Sivaraja_2020 | not_relevant | 1 | 1 | The paper focuses on VE-1902 and only provides a single comparative EC50 value for argatroban in a thrombin generation assay, lacking a full dose-response curve or PK/PD model for argatroban. |
| PGx | Tran_1999 | not_relevant | 0 | 0 | The study evaluates a drug-drug interaction (erythromycin) rather than a pharmacogenomic effect (gene variant/genotype) on argatroban PK/PD. |
| popPK | Winn_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of argatroban's effect on vasomotor actions in canine coronary arteries, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Wu_2024 | not_relevant | 0 | 0 | The paper focuses on clopidogrel resistance and CYP2C19 genotypes; argatroban is only mentioned as a concomitant medication with a higher usage rate in the resistance group, with no pharmacogenomic analysis of argatroban PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-05 13:52 UTC</sub>
