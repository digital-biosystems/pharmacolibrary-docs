<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N07X&quot;,&quot;href&quot;:&quot;atc/N07X.md&quot;},{&quot;label&quot;:&quot;trofinetide&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Trofinetide_Darwish2025_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Trofinetide_Darwish2025v2_reference&quot;,&quot;label&quot;:&quot;Darwish_2025_2_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trofinetide

- **generic name:** trofinetide
- **ATC codes:** `N07XX24`
- **DrugBank:** [DB06045](https://go.drugbank.com/drugs/DB06045) · **PubChem:** not captured
- **molar mass:** 315.326 g/mol (C13H21N3O6) — DrugBank
- **groups:** approved

## About

Trofinetide is a nervous system drug used for Rett syndrome. It is an approved medicine, though its status in the European Union is still under re-examination.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27294917](https://www.wikidata.org/wiki/Q27294917) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| trofinetide | parent | 315.326 | C13H21N3O6 | DrugBank | — | Darwish_2025, Darwish_2025_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 05:03 | 2:37 | 2/1/0 | 1/0/0 | 0/0/0 | 128,038/8,608 | ollama / glm-5.3-flash | 4 | 1/3 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Darwish_2025_reference](drugs/drug_trofinetide/Trofinetide_Darwish2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+9 cov.) | Darwish M et al., Population Pharmacokinetic Modeling to…, Advances in therapy (2025) | [10.1007/s12325-024-03056-9](https://doi.org/10.1007/s12325-024-03056-9) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Darwish_2025_2_reference](drugs/drug_trofinetide/Trofinetide_Darwish2025v2_reference.md) | ▶ model + simulator | 2-compartment, oral | 6 (+6 cov.) | Darwish M et al., Population Pharmacokinetics of Trofinet…, Advances in therapy (2025) | [10.1007/s12325-024-03058-7](https://doi.org/10.1007/s12325-024-03058-7) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Oosterholt_2017_reference](drugs/drug_trofinetide/Trofinetide_Oosterholt2017_reference.md) | — | 1-compartment (no model) | 0 | Oosterholt SP et al., Population pharmacokinetics of NNZ-2566…, European journal of pharmac… (2017) | [10.1016/j.ejps.2017.05.032](https://doi.org/10.1016/j.ejps.2017.05.032) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Darwish_2024_CSBS_DP_IT](drugs/drug_trofinetide/pd_Darwish_2024_CSBS_DP_IT.md) | CSBS-DP-IT Social Composite score ← trofinetide · direct linear effect | model (no simulator) | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Darwish_2024_RSBQ](drugs/drug_trofinetide/pd_Darwish_2024_RSBQ.md) | RSBQ total score ← trofinetide · direct linear effect | model (no simulator) | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Darwish_2024_RTT_COMC](drugs/drug_trofinetide/pd_Darwish_2024_RTT_COMC.md) | RTT-COMC score ← trofinetide · categorical (graded) response model | — | Darwish M et al., Exposure-Response Efficacy Modeling to…, Advances in therapy (2024) | [10.1007/s12325-024-02796-y](https://doi.org/10.1007/s12325-024-02796-y) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trofinetide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | kidney | `UGT1A9` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A9` inhibitor, `UGT2B15` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `UGT2B7` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Darwish_2024 | irrelevant | 3 | 2 | This is an exposure–response efficacy modeling paper; the popPK model is only cited (Darwish reference 9) and no trofinetide CL/V/Q/ka disposition parameters appear in the evidence, only exposure metrics (AUC, Cmax) and E-R slope coefficients. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 05:01 UTC</sub>
