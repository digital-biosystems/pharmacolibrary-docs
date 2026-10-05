<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A16A&quot;,&quot;href&quot;:&quot;atc/A16A.md&quot;},{&quot;label&quot;:&quot;eliglustat&quot;}]"></div>

# eliglustat

- **generic name:** eliglustat
- **ATC codes:** `A16AX10`
- **DrugBank:** [DB09039](https://go.drugbank.com/drugs/DB09039) · **PubChem:** [CID 23652731](https://pubchem.ncbi.nlm.nih.gov/compound/23652731)
- **molar mass:** 404.551 g/mol (C23H36N2O4) — DrugBank
- **groups:** approved, investigational

## About

Eliglustat is a medicine used to treat Gaucher's disease. It is authorised in the European Union and is an approved drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21011224](https://www.wikidata.org/wiki/Q21011224) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| eliglustat | parent | 404.551 | C23H36N2O4 | DrugBank | [23652731](https://pubchem.ncbi.nlm.nih.gov/compound/23652731) | Li_2020 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 02:10 | 12:47 | 0/1/2 | 0/0/0 | 0/0/0 | 89,468/47,840 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 12/1 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_84_mg_bid_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_bid_a.md) | — | 1-compartment (no model) | 1 | JingLi jing.li3@sanofi.com et al., Impact of hepatic and renal impairment… (2020) | [10.1016/j.ymgme.2019.11.002](https://doi.org/10.1016/j.ymgme.2019.11.002) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Li_2020_84_mg_qd_a](drugs/drug_eliglustat/Eliglustat_Li2020_84_mg_qd_a.md) | — | 1-compartment (no model) | 1 | JingLi jing.li3@sanofi.com et al., Impact of hepatic and renal impairment… (2020) | [10.1016/j.ymgme.2019.11.002](https://doi.org/10.1016/j.ymgme.2019.11.002) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (primary re-run, agreement 0.333). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 0.99).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wolthuis_2025_reference](drugs/drug_eliglustat/Eliglustat_Wolthuis2025_reference.md) | — | 1-compartment (no model) | 0 | Wolthuis DFGJ et al., Model-informed repurposing of eliglusta…, Pediatric nephrology (Berli… (2025) | [10.1007/s00467-025-06688-3](https://doi.org/10.1007/s00467-025-06688-3) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=eliglustat) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: UGCG (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 2 matched, 2 returned
- **screened:** 13  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs_review 2  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fowler_2017 | irrelevant | not captured | not captured | The paper is a review that discusses a PBPK model for eliglustat as a case study but does not report extractable quantitative pharmacokinetic parameters. |
| popPK | Marshall_2010 | irrelevant | not captured | not captured | The paper reports only pharmacodynamic efficacy and disease biomarkers in a mouse model, with no quantitative pharmacokinetic parameters or modeling for eliglustat. |
| popPK | Reddy_2025 | irrelevant | not captured | not captured | Eliglustat is used only as a probe substrate in PBPK simulations to evaluate rifampin DDI predictions, with no original quantitative PK parameters reported. |
| popPK | Vykoukal_2025 | irrelevant | not captured | not captured | The paper investigates the mechanistic anti-tumor effects of eliglustat in cell lines and mouse models but contains no quantitative pharmacokinetic data or population-PK modeling. |
| popPK | Wang_2019_2 | relevant | not captured | not captured | The paper reports quantitative noncompartmental pharmacokinetic parameters (clearance, AUC, Cmax) for eliglustat in rats but does not contain population or compartmental model estimates. |
| popPK | Zhan_2025 | irrelevant | not captured | not captured | Eliglustat is used solely as an internal standard for givinostat quantification, with no pharmacokinetic parameters reported for it. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-30 01:59 UTC</sub>
