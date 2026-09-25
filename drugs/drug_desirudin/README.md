<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;desirudin&quot;}]"></div>

# desirudin

- **generic name:** desirudin
- **ATC codes:** `B01AE01`
- **DrugBank:** [DB11095](https://go.drugbank.com/drugs/DB11095)
- **groups:** approved, withdrawn

## About

**Description.** Desirudin is a direct inhibitor of human thrombin. It has a protein structure that is similar to that of hirudin, the naturally occurring anticoagulant present in the peripharyngeal glands in the medicinal leech, Hirudo medicinalis. Hirudin is a single polypeptide chain of 65 amino acids residues and contains three disulfide bridges. Desirudin has a chemical formula of C287H440N80O110S6 with a molecular weight of 6963.52.

It is mainly indicated for the prevention of deep vein thrombosis in hip replacement surgery patients. 
Common side effects include: Bleeding gums, collection of blood under the skin, coughing up blood, deep, dark purple bruise and difficulty with breathing or swallowing.

**Indication.** Indicated as prophylaxis of deep vein thrombosis for patients undergoing hip replacement surgery.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-06 16:41 | 1:22 | 0/0/0 | 1/0/0 | 0/0/0 | 15,868/592 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 5/0 | 4/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Lefèvre_1997](drugs/drug_desirudin/pd_Lef_vre_1997_activated_partial_thromboplastin_time.md) | Lefèvre G et al., Effect of renal impairment on the pharm…, Clinical pharmacology and t… (1997) | [10.1016/S0009-9236(97)90151-X](https://doi.org/10.1016/S0009-9236(97)90151-X) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=desirudin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>“…at desirudin is primarily eliminated and metabolized by the kidney. The total urinary excr…”</sub> | prose |
| excretion | kidney | <sub>“…Urine (40% to 50% as unchanged drug).…”</sub> | prose |

<sub>Actors without a tissue in the table: CPA1 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 11 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Amin_1997.pdf` | Amin DM et al., Effect of a 15-minute infusion of DDAVP…, Thrombosis and haemostasis (1997) | popPK | 10 | not captured | [9031462](https://pubmed.ncbi.nlm.nih.gov/9031462) | The study investigates the pharmacokinetics of desirudin (REVASC) in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |

<sub>queue written 2026-09-06T16:40:51.309726+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Amin_1997 | relevant | 10 | 0 | The study investigates the pharmacokinetics of desirudin (REVASC) in humans, but the provided evidence contains only qualitative descriptions and no numeric parameter values. |
| PD | Amin_1997 | not_relevant | 2 | 1 | The study describes qualitative changes in APTT (plateau, partial reversal) but does not report numeric PD parameters (Emax, EC50) or a quantitative concentration-effect model for desirudin. |
| popPK | Bergese_2013 | irrelevant | 0 | 0 | The paper is a clinical safety trial reporting bleeding and thrombosis endpoints, with no pharmacokinetic parameters or quantitative disposition data for desirudin. |
| popPK | Kaye_2019 | irrelevant | 0 | 0 | This is a clinical practice guideline review regarding bleeding risk in interventional pain procedures, not a pharmacokinetic study, and it does not report quantitative PK parameters for desirudin. |
| PD | Kaye_2019 | not_relevant | 1 | 0 | The paper is a clinical guideline review that mentions desirudin only in the context of perioperative management and general pharmacokinetic/pharmacodynamic considerations, without providing any specific numeric PD parameters or exposure-response data. |
| popPK | Kong_2014 | irrelevant | 2 | 1 | The paper is a review of direct thrombin inhibitors that mentions desirudin's half-life and clearance mechanism but does not report original quantitative PK parameters (CL, V, Q, ka) or a compartmental model. |
| popPK | Lefèvre_1997 | relevant | 9 | 4 | The study reports quantitative PK parameters (clearance, AUC) for desirudin, but specific numeric values for clearance and volume are not explicitly listed in the text, only relative changes and qualitative descriptions. |
| popPK | Lepor_2007 | irrelevant | 0 | 0 | The paper is a narrative review of anticoagulation strategies that mentions desirudin only as an approved drug without providing any quantitative pharmacokinetic parameters. |
| PD | Lepor_2007 | not_relevant | 1 | 0 | The text is a general review of anticoagulants that mentions desirudin only as an approved drug without providing any specific pharmacodynamic data, exposure-response analysis, or numeric parameters. |
| popPK | Menear_1998 | irrelevant | 0 | 0 | The paper is a review of thrombin inhibitors and does not report quantitative pharmacokinetic parameters for desirudin. |
| popPK | Nafziger_2010 | relevant | 8 | 2 | The study reports desirudin concentration data (Cmax) and mentions PK simulations, but specific compartmental parameters (CL, V, ka) are not explicitly listed in the provided text. |
| popPK | Shen_2001 | irrelevant | 0 | 0 | The paper is a review of thrombin-specific inhibitors and does not report any quantitative pharmacokinetic parameters for desirudin. |
| popPK | Shen_2006 | irrelevant | 0 | 0 | The paper is a narrative review of thrombin inhibitors that discusses desirudin's clinical efficacy but does not report any quantitative pharmacokinetic parameters (e.g., clearance, volume, half-life) for desirudin. |
| popPK | Trujillo_2010 | irrelevant | 1 | 0 | The paper is a review of VTE prevention strategies that mentions desirudin only as a comparator or background agent, providing no original quantitative pharmacokinetic parameters (CL, V, Q, ka) for desirudin. |
| PD | Trujillo_2010 | not_relevant | 1 | 0 | The text is a general review of anticoagulants for VTE prevention and does not report specific numeric pharmacodynamic parameters or exposure-response relationships for desirudin. |
| popPK | Vranckx_2011 | irrelevant | 0 | 0 | The paper is a review comparing the pharmacology and clinical utility of desirudin and bivalirudin, containing no original quantitative pharmacokinetic parameter values. |
| PD | Vranckx_2011 | not_relevant | 1 | 0 | The text is a qualitative review comparing the pharmacology of desirudin and bivalirudin without providing any numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Warkentin_2004 | irrelevant | 0 | 0 | The paper is a review of bivalent direct thrombin inhibitors and does not report original quantitative pharmacokinetic parameters for desirudin. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | The provided evidence contains only a conference acronym and no pharmacokinetic data or text regarding desirudin. |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a conference tag (EANM'17) and contains no information regarding desirudin, pharmacodynamics, or exposure-response relationships. |
| popPK | unknown_2024 | irrelevant | 0 | 0 | The provided evidence contains only a copyright take-down policy and download metadata, with no scientific content or pharmacokinetic data for desirudin. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a copyright/takedown policy notice and does not contain any scientific data, pharmacodynamic models, or numeric parameters for desirudin. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
