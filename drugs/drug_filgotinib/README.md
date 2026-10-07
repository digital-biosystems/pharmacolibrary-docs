<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;filgotinib&quot;}]"></div>

# filgotinib

- **generic name:** filgotinib
- **ATC codes:** `L04AF04`
- **DrugBank:** [DB14845](https://go.drugbank.com/drugs/DB14845) · **PubChem:** not captured
- **molar mass:** 425.51 g/mol (C21H23N5O3S) — DrugBank
- **groups:** approved, investigational

## About

Filgotinib is a JAK inhibitor used to treat rheumatoid arthritis. It is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q19904163](https://www.wikidata.org/wiki/Q19904163) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| filgotinib | parent | 425.51 | C21H23N5O3S | DrugBank | — | Namour_2015 |
| active metabolite | metabolite | 357.432 | C17H19N5O2S | PubChem | [67479440](https://pubchem.ncbi.nlm.nih.gov/compound/67479440) | Namour_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:03 | 3:02 | 0/6/0 | 1/0/0 | 0/0/0 | 262,949/13,995 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_anova_p_value](drugs/drug_filgotinib/Filgotinib_Namour2015_anova_p_value.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_anovaa_p_value](drugs/drug_filgotinib/Filgotinib_Namour2015_anovaa_p_value.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_anovaa_p_value_tukey_s_test](drugs/drug_filgotinib/Filgotinib_Namour2015_anovaa_p_value_tukey_s_test.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_estimate_rse](drugs/drug_filgotinib/Filgotinib_Namour2015_estimate_rse.md) | — | parent + metabolite (no model) | 12 (+2 cov.) | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_filgotinib](drugs/drug_filgotinib/Filgotinib_Namour2015_filgotinib.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Namour_2015_metabolite](drugs/drug_filgotinib/Filgotinib_Namour2015_metabolite.md) | — | parent + metabolite (no model) | 5 | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Namour_2015_pSTAT1](drugs/drug_filgotinib/pd_Namour_2015_pSTAT1.md) | pSTAT1-positive cells biomarker turnover ← filgotinib and metabolite | — | Namour F et al., Pharmacokinetics and Pharmacokinetic/Ph…, Clinical pharmacokinetics (2015) | [10.1007/s40262-015-0240-z](https://doi.org/10.1007/s40262-015-0240-z) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=filgotinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | liver | `CES1` metabolizer, `CES2` metabolizer | DrugBank actor |
| metabolism | small intestine | `CES2` metabolizer | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: JAK1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 6  ·  extracted 0  ·  needs_review 0  ·  rejected 6  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2025 | irrelevant | 0 | 0 | The paper is a clinical pharmacodynamic analysis of glucocorticoid sparing effects in rheumatoid arthritis and does not report any pharmacokinetic parameters for filgotinib. |
| popPK | Chandran_2023 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and biomarker study of filgotinib in psoriatic arthritis and does not report pharmacokinetic disposition parameters. |
| popPK | Ma_2025 | irrelevant | 0 | 0 | This is a post-hoc efficacy analysis of filgotinib in Crohn's disease reporting clinical and endoscopic response rates, not a pharmacokinetic study. |
| popPK | Meng_2022 | relevant | 9 | 2 | This is a relevant population PK study for filgotinib, but the specific numeric parameter values (CL, V, ka) are in Supporting Information Tables S3/S4 which are not included in the provided evidence. |
| popPK | Namour_2015_2 | relevant | 8 | 2 | The text is an author's reply to a PK modeling study containing specific numeric values for model comparison (OFV) and ratio estimates, but it lacks the core population PK parameter values (CL, V, Q) which are likely in the original publication or figures not provided. |
| popPK | Qtaishat_2026 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of efficacy and safety in Crohn's disease, containing no pharmacokinetic data or disposition parameters for filgotinib. |
| popPK | Quraishi_2026 | irrelevant | 0 | 0 | The paper is a systematic review and meta-analysis regarding the incidence of acne (an adverse event) in IBD patients treated with JAK inhibitors, and it reports no pharmacokinetic parameters for filgotinib. |
| popPK | Sonomoto_2026 | irrelevant | 0 | 0 | The paper is a real-world comparative effectiveness and safety study of JAK inhibitors, reporting clinical outcomes like CDAI scores rather than pharmacokinetic parameters for filgotinib. |
| popPK | Srinivas_2015 | irrelevant | 0 | 0 | no_text gate: only 169 chars of text extracted (&lt; 400) |
| popPK | Wang_2023 | irrelevant | 0 | 0 | The study investigates the antiviral effects of filgotinib in vitro against coronaviruses and does not report pharmacokinetic parameters for filgotinib. |
| popPK | Zhang_2026 | irrelevant | 0 | 0 | The study evaluates a different drug (H018) using filgotinib only as a positive control, and filgotinib plasma concentrations were explicitly reported as undetectable. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 00:01 UTC</sub>
