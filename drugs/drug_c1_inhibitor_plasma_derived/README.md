<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B06A&quot;,&quot;href&quot;:&quot;atc/B06A.md&quot;},{&quot;label&quot;:&quot;c1-inhibitor, plasma derived&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Pawaskar2018_reference&quot;,&quot;label&quot;:&quot;Pawaskar_2018_reference&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Bernstein2010_reference&quot;,&quot;label&quot;:&quot;Bernstein_2010_reference&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Bernstein2010_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;C1InhibitorPlasmaDerived_Diris2002_reference&quot;,&quot;label&quot;:&quot;Diris_2002_reference&quot;,&quot;href&quot;:&quot;drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Diris2002_reference.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# c1-inhibitor, plasma derived

- **generic name:** c1-inhibitor, plasma derived
- **ATC codes:** `B06AC01`
- **DrugBank:** [DB06404](https://go.drugbank.com/drugs/DB06404)
- **groups:** approved, investigational

## About

**Description.** C1 Esterase Inhibitor (Human) is composed of purified endogenous complement component-1 esterase inhibitor (hC1INH) isolated from human plasma. The primary function of endogenous C1INH is to regulate the activation of the complement and contact system pathways.[L16586, L16606]

This drug is indicated for  prophylaxis and treatment of Hereditary Angioedema (HAE), a human genetic disorder caused by a shortage of C1 inhibitor activity that results in an overreaction of the immune system. The disease is characterized by acute attacks of painful, and in some cases, fatal swelling of several soft tissues or edema, which may last up to five days when untreated.[L16586, L16606]

**Indication.** Intravenous and subcutaneous formulations of the human C1-esterase inhibitor are indicated for routine prophylaxis against acute attacks of hereditary angioedema in patients six years of age and older.[L16586, L16606] It is also used to treat these in adult and adolescent patients with hereditary angioedema.[L40995]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-19 10:26 | 4:05 | 1/0/2 | 0/0/0 | 0/0/0 | 111,885/6,908 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.182). The first reading is what the record holds.">cross-check: disputed</span><br><sub>caveat: the record defines covariate effects (weight on clearance, renal function …) but the engineer simulated only…</sub> | [Pawaskar_2018_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Pawaskar2018_reference.md) | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Bernstein_2010_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Bernstein2010_reference.md) | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs both; the m…</sub><br><sub>route_to: `human_review`</sub> | [Diris_2002_reference](drugs/drug_c1_inhibitor_plasma_derived/C1InhibitorPlasmaDerived_Diris2002_reference.md) | Diris JH et al., Pharmacokinetics of C1-inhibitor protei…, Clinical pharmacology and t… (2002) | [10.1067/mcp.2002.129320](https://doi.org/10.1067/mcp.2002.129320) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=c1_inhibitor_plasma_derived) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>“…tein synthesis or further broken down and eliminated by the kidneys.[A182009]…”</sub> | prose |

<sub>Actors without a tissue in the table: C1R (inhibitor), C1S (inhibitor), F11 (inhibitor), F12 (inhibitor), F2 (inhibitor), KLKB1 (inhibitor), PLAT (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 11 matched, 11 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bernstein_2010.pdf` | Bernstein JA et al., Population pharmacokinetics of plasma-d…, Annals of allergy, asthma &… (2010) | popPK | 10 | [10.1016/j.anai.2010.06.005](https://doi.org/10.1016/j.anai.2010.06.005) | [20674826](https://pubmed.ncbi.nlm.nih.gov/20674826) | The paper reports quantitative population pharmacokinetic parameters (clearance and half-life) for plasma-derived C1 inhibitor in the abstract. |
| `Pawaskar_2018.pdf` | Pawaskar D et al., Population pharmacokinetics of subcutan…, Clinical and experimental a… (2018) | popPK | 10 | [10.1111/cea.13220](https://doi.org/10.1111/cea.13220) | [29998524](https://pubmed.ncbi.nlm.nih.gov/29998524) | The paper reports a population pharmacokinetic model for C1-inhibitor (plasma-derived) with explicit numeric values for clearance, volume of distribution, absorption rate, and half-life in the text. |
| `Martinez-Saguer_2010.pdf` | Martinez-Saguer I et al., Pharmacokinetic analysis of human plasm…, Transfusion (2010) | popPK | 9 | [10.1111/j.1537-2995.2009.02394.x](https://doi.org/10.1111/j.1537-2995.2009.02394.x) | [19788511](https://pubmed.ncbi.nlm.nih.gov/19788511) | The study reports quantitative pharmacokinetic parameters (half-life, Tmax) for the subject drug c1_inhibitor_plasma_derived in a compartmental model context. |

<sub>queue written 2026-09-19T10:22:56.172386+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chandler_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tissue plasminogen activator (TPA) and PAI-1, with C1 inhibitor mentioned only as a measured complex component, not as the subject drug. |
| popPK | Farrell_2013 | irrelevant | 1 | 1 | The study reports population PK parameters for recombinant human C1 inhibitor (rhC1INH), not the plasma-derived form (pdC1INH) specified as the subject drug. |
| popPK | Huang_2020 | irrelevant | 0 | 0 | The paper is a clinical efficacy/safety study reporting graft function outcomes (eGFR) and does not contain pharmacokinetic parameters (CL, V, t1/2) for C1 esterase inhibitor. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for lanadelumab, not c1_inhibitor_plasma_derived. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-19 10:23 UTC</sub>
