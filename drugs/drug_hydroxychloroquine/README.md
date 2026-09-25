<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;hydroxychloroquine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Hydroxychloroquine_Thmans2020_reference&quot;,&quot;label&quot;:&quot;Th\u00e9mans_2020_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Alvarez2022_reference&quot;,&quot;label&quot;:&quot;Alvarez_2022_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Alvarez2022_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Hydroxychloroquine_Zahr2021_reference&quot;,&quot;label&quot;:&quot;Zahr_2021_reference&quot;,&quot;href&quot;:&quot;drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md&quot;,&quot;status&quot;:&quot;built, not shipped&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# hydroxychloroquine

- **generic name:** hydroxychloroquine
- **ATC codes:** `P01BA02`
- **DrugBank:** [DB01611](https://go.drugbank.com/drugs/DB01611)
- **groups:** approved, investigational

## About

**Description.** Hydroxychloroquine is a racemic mixture consisting of an R and S enantiomer.[A183047] Hydroxychloroquine is an aminoquinoline like [chloroquine].[L8072] It is a commonly prescribed medication in the treatment of uncomplicated malaria, rheumatoid arthritis, chronic discoid lupus erythematosus, and systemic lupus erythematosus.[L8072] Hydroxychloroquine is also used for the prophylaxis of malaria in regions where chloroquine resistance is unlikely.[L8072] It was developed during World War II as a derivative of [quinacrine] with less severe side effects.[A183092] Chloroquine and hydroxychloroquine are both being investigated for the treatment of SARS-CoV-2.[A192132]

**The FDA emergency use authorization for hydroxychloroquine and [chloroquine] in the treatment of COVID-19 was revoked on 15 June 2020.[L14312]**

Hydroxychloroquine was granted FDA approval on 18 April 1955.[L8072]

A recent study reported a fatality in the group being treated with hydroxychloroquine for COVID-19.[A192546]

**Indication.** Hydroxychloroquine is indicated for the prophylaxis of malaria where chloroquine resistance is not reported, treatment of uncomplicated malaria (caused by _P. falciparum_, _P. malariae_, _P. ovale_, or _P. vivax_), chronic discoid lupus erythematosus, systemic lupus erythematosus, acute rheumatoid arthritis, and chronic rheumatoid arthritis.[L8072]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| not captured | not captured | 3/0/0 | 0/0/0 | 0/0/0 | not captured | not captured | 22 | 5/0 | 13/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span> | [Thémans_2020_reference](drugs/drug_hydroxychloroquine/Hydroxychloroquine_Thmans2020_reference.md) | Thémans P et al., Population Pharmacokinetics of Hydroxyc…, European journal of drug me… (2020) | [10.1007/s13318-020-00648-y](https://doi.org/10.1007/s13318-020-00648-y) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: model_quarantined: CLelim[central], Q1 left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Alvarez_2022_reference](drugs/drug_hydroxychloroquine/Hydroxychloroquine_Alvarez2022_reference.md) | Alvarez JC et al., Population Pharmacokinetics of Hydroxyc…, Pharmaceuticals (Basel, Swi… (2022) | [10.3390/ph15020256](https://doi.org/10.3390/ph15020256) |
| <span class="pk-badge pk-badge--orange">built, not shipped</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.857). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: model_quarantined: Cl, Vd, ka, Tlag left at base-class defaults</sub><br><sub>route_to: `scholar`</sub> | [Zahr_2021_reference](drugs/drug_hydroxychloroquine/Hydroxychloroquine_Zahr2021_reference.md) | Zahr N et al., Pharmacokinetics and pharmacodynamics o…, Therapie (2021) | [10.1016/j.therap.2021.01.056](https://doi.org/10.1016/j.therap.2021.01.056) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=hydroxychloroquine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `SLCO1A2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C8` substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…s sloughed off in skin and 24-25% is eliminated through the feces.[T671]…”</sub> | prose |
| excretion | kidney | <sub>“…ted renally, while only 16-21% of a dose is excreted in the urine as unchanged drug.[A1830…”</sub> | prose |
| excretion | skin | <sub>“…as unchanged drug.[A183047] 5% of a dose is sloughed off in skin and 24-25% is eliminated…”</sub> | prose |

<sub>Actors without a tissue in the table: ACE2 (modulator), DNA (cross-linking/alkylation), TLR7 (target), TLR9 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 74 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Kojima_2025 | irrelevant | 0 | 0 | This is a belimumab SLE outcomes paper and hydroxychloroquine is only a covariate/comedication, with no hydroxychloroquine PK parameters reported. |
| popPK | Massonnaud_2025 | irrelevant | 0 | 0 | This is a COVID biomarker/treatment study of hydroxychloroquine, not a pharmacokinetic paper, and no PK disposition parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-07-15 12:27 UTC</sub>
