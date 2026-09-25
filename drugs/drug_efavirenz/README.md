<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;efavirenz&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Efavirenz_Chala2023_reference&quot;,&quot;label&quot;:&quot;Chala_2023_reference&quot;,&quot;href&quot;:&quot;drugs/drug_efavirenz/Efavirenz_Chala2023_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Efavirenz_Vucicevic2025_reference&quot;,&quot;label&quot;:&quot;Vucicevic_2025_reference&quot;,&quot;href&quot;:&quot;drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# efavirenz

- **generic name:** efavirenz
- **ATC codes:** `J05AG03`, `J05AR06`, `J05AR11`
- **DrugBank:** [DB00625](https://go.drugbank.com/drugs/DB00625)
- **groups:** approved, investigational

## About

**Description.** Efavirenz (brand names Sustiva® and Stocrin®) is a non-nucleoside reverse transcriptase inhibitor (NNRTI) and is used as part of highly active antiretroviral therapy (HAART) for the treatment of a human immunodeficiency virus (HIV) type 1.

For HIV infection that has not previously been treated, efavirenz and lamivudine in combination with zidovudine or tenofovir is the preferred NNRTI-based regimen.

Efavirenz is also used in combination with other antiretroviral agents as part of an expanded postexposure prophylaxis regimen to prevent HIV transmission for those exposed to materials associated with a high risk for HIV transmission.

**Indication.** For use in combination treatment of HIV infection (AIDS)

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 2/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 26 | 2/0 | 10/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). The first reading is what the record holds.">cross-check: disputed</span> | [Chala_2023_reference](drugs/drug_efavirenz/Efavirenz_Chala2023_reference.md) | Chala A et al., Genetic and non-genetic factors influen…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.12951](https://doi.org/10.1002/psp4.12951) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Vucicevic_2025_reference](drugs/drug_efavirenz/Efavirenz_Vucicevic2025_reference.md) | Vucicevic K et al., Population Pharmacokinetic-Pharmacogene…, Cureus (2025) | [10.7759/cureus.88533](https://doi.org/10.7759/cureus.88533) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=efavirenz) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inducer | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2B6` inducer/substrate, `CYP2C19` inducer, `CYP2C8` inhibitor, `CYP2C9` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `CYP3A7` inducer, `SLC22A1` inhibitor, `UGT1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inducer/inhibitor/substrate, `CYP3A5` inducer, `UGT1A1` inducer | DrugBank actor |
| excretion | kidney | <sub>“…Nearly all of the urinary excretion of the radiolabeled drug was in the form of metab…”</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 217 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Calderin_2025 | irrelevant | not captured | not captured | The paper focuses on dexamethasone pharmacokinetics and only mentions efavirenz as a co-administered covariate without reporting any quantitative PK parameters for it. |
| popPK | Calderin_2026 | irrelevant | not captured | not captured | The paper investigates dexamethasone pharmacokinetics, and efavirenz is only listed as a concomitant medication tested as a covariate without any reported PK parameters for efavirenz itself. |
| popPK | Collins_2025 | irrelevant | not captured | not captured | The study models the pharmacokinetics of midazolam as a probe drug to quantify CYP3A induction by efavirenz, rather than reporting population-PK parameters for efavirenz itself. |
| popPK | Salinger_2019 | irrelevant | not captured | not captured | The paper develops a population PK model for pretomanid, with efavirenz only mentioned as a co-administered covariate affecting pretomanid exposure. |
| popPK | Wang_2020 | irrelevant | not captured | not captured | Efavirenz is only mentioned as a co-administered covariate affecting delamanid clearance, with no pharmacokinetic parameters reported for efavirenz itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 11:51 UTC</sub>
