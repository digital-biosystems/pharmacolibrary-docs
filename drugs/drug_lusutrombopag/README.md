<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;lusutrombopag&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Lusutrombopag_Katsube2019_reference&quot;,&quot;label&quot;:&quot;Katsube_2019_reference&quot;,&quot;href&quot;:&quot;drugs/drug_lusutrombopag/Lusutrombopag_Katsube2019_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# lusutrombopag

- **generic name:** lusutrombopag
- **ATC codes:** `B02BX07`
- **DrugBank:** [DB13125](https://go.drugbank.com/drugs/DB13125)
- **groups:** approved

## About

**Description.** Lusutrombopag is an orally bioavailable thrombopoietin receptor (TPOR) agonist developed by Shionogi & Company (Osaka, Japan). TPOR is a regulatory target site for endogenous thrombopoietin, which acts as a primary cytokine to promote megakaryocyte proliferation and differentiation, and affect other hematopoietic lineages as well, including erythroid, granulocytic and lymphoid lineages [A36736]. Thrombocytopenia, which indicates abnormally low levels of platelets, is a common complication related to chronic liver disease. This hematological abnormality, especially in cases of severe thrombocytopenia (platelet count <50,000/μL), creates challenges to patients requiring invasive medical procedures where there is a significant risk for spontaneous bleeding [A36732]. Lusutrombopag binds to the transmembrane domain of TPOR expressed on megakaryocytes, and causes the proliferation and differentiation of megakaryocytic progenitor cells from hematopoietic stem cells [FDA Label]. 

In September 2015, lusutrombopag received its first global approval in Japan to reduce the need for platelet transfusion in adults with chronic liver disease and thrombocytopenia who are schedule to undergo an invasive medical procedure [A36730]. Lusutrombopag was approved by the FDA on July 31st, 2018 for the same therapeutic indication under the market name Mulpleta. In two randomized, double-blind, placebo-controlled trials, patients with chronic liver disease and severe thrombocytopenia who were undergoing an invasive procedure with a platelet count less than 50 x 10^9/L were administered lusutrombopag orally [L4166]. Higher percentages (65-78%) of the patients receiving lusutrombopag required no platelet transfusion prior to the primary invasive procedure compared to those receiving placebo [L4166]. Lusutrombopag is currently in phase III development in various European countries including Austria, Belgium, Germany, and the UK [A36730].

**Indication.** Lusutrombopag is indicated for the treatment of thrombocytopenia in adults with chronic liver disease who are scheduled to undergo a medical or dental procedure.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 22:35 | 2:00 | 0/1/0 | 1/0/0 | 0/0/0 | 77,014/1,446 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.643). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Katsube_2019_reference](drugs/drug_lusutrombopag/Lusutrombopag_Katsube2019_reference.md) | Katsube T et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00770-4](https://doi.org/10.1007/s40262-019-00770-4) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> | [Katsube_2019](drugs/drug_lusutrombopag/pd_Katsube_2019_PLT.md) | Katsube T et al., Pharmacokinetic/Pharmacodynamic Modelli…, Clinical pharmacokinetics (2019) | [10.1007/s40262-019-00770-4](https://doi.org/10.1007/s40262-019-00770-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=lusutrombopag) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…nistered dose of lusutrombopag undergoes urinary excretion. Fecal excretion accounted for…”</sub> | prose |
| excretion | kidney | <sub>“…bout 1% of the administered dose of lusutrombopag undergoes urinary excretion. Fecal excre…”</sub> | prose |

<sub>Actors without a tissue in the table: CYP4A11 (substrate), MPL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 4 matched, 4 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Katsube_2016.pdf` | Katsube T et al., Population Pharmacokinetic and Pharmaco…, Clinical pharmacokinetics (2016) | popPK | 10 | [10.1007/s40262-016-0411-6](https://doi.org/10.1007/s40262-016-0411-6) | [27209291](https://pubmed.ncbi.nlm.nih.gov/27209291) | The paper describes a population PK/PD model for lusutrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

<sub>queue written 2026-09-18T22:33:23.532360+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Katsube_2016 | relevant | 10 | 0 | The paper describes a population PK/PD model for lusutrombopag, but the specific numeric parameter values (CL, V, etc.) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 22:33 UTC</sub>
