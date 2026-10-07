<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;trastuzumab deruxtecan&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;TrastuzumabDeruxtecan_Yin2021_final&quot;,&quot;label&quot;:&quot;Yin_2021_final&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# trastuzumab deruxtecan

- **generic name:** trastuzumab deruxtecan
- **ATC codes:** `L01FD04`
- **DrugBank:** [DB14962](https://go.drugbank.com/drugs/DB14962) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Trastuzumab deruxtecan is an antibody-drug conjugate used to treat breast cancer. It is an approved medicine and is authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q80109553](https://www.wikidata.org/wiki/Q80109553) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| released drug | metabolite | 493.491 | C26H24FN3O6 | PubChem | [117888634](https://pubchem.ncbi.nlm.nih.gov/compound/117888634) | Yin_2021 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 21:41 | 7:24 | 2/1/0 | 0/0/0 | 0/0/0 | 196,363/12,166 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 0/5 | 5/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Yin_2021_final](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final.md) | ▶ model + simulator | 1-compartment, IV | 4 (+7 cov.) | Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Yin_2021_final_final_released_drug_model](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Yin2021_final_final_released_drug_mode.md) | held back | 1-compartment, IV | 3 (+5 cov.) | Yin O et al., Population Pharmacokinetics of Trastuzu…, Clinical pharmacology and t… (2021) | [10.1002/cpt.2096](https://doi.org/10.1002/cpt.2096) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Asiimwe_2025_reference](drugs/drug_trastuzumab_deruxtecan/TrastuzumabDeruxtecan_Asiimwe2025_reference.md) | — | 1-compartment (no model) | 0 | Asiimwe IG et al., Postmarketing Assessment of Antibody-Dr…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70013](https://doi.org/10.1002/psp4.70013) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=trastuzumab_deruxtecan) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate, `ABCG2` substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCC1` substrate | DrugBank actor |
| distribution | lung | `ABCC1` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `SLCO1B1` unknown, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CTSB (substrate), CTSL (substrate), FCGR1A (antibody), GAA (substrate), TOP1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 9 matched, 9 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 2  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yoshihara_2023.pdf` | Yoshihara K et al., Trastuzumab Deruxtecan Dosing in Human…, Journal of clinical pharmac… (2023) | popPK | 10 | [10.1002/jcph.2295](https://doi.org/10.1002/jcph.2295) | [37393579](https://pubmed.ncbi.nlm.nih.gov/37393579) | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |
| `Lu_2023.pdf` | Lu Z et al., Use of Real-World Evidence in a Virtual…, Journal of clinical pharmac… (2023) | popPK | 8 | [10.1002/jcph.2297](https://doi.org/10.1002/jcph.2297) | [37377133](https://pubmed.ncbi.nlm.nih.gov/37377133) | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |

<sub>queue written 2026-10-07T21:35:05.171511+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cherifi_2024 | irrelevant | 2 | 0 | The paper is a qualitative literature review describing general PK/PD profiles without reporting specific quantitative parameter values (CL, V, etc.) for trastuzumab deruxtecan. |
| popPK | Dai_2025 | irrelevant | 0 | 0 | The paper is a diagnostic imaging study predicting HER2-low status using ultrasound and does not report any pharmacokinetic parameters for trastuzumab deruxtecan. |
| popPK | Lu_2023 | relevant | 8 | 2 | The paper describes a population PK model for trastuzumab deruxtecan but only reports exposure ratios and clinical outcomes, lacking specific numeric PK parameter values (CL, V, etc.) in the provided text. |
| popPK | Ter_2023 | irrelevant | 2 | 0 | The paper is a modeling and simulation study for cost-saving dosing regimens that uses existing population PK models but does not report original quantitative PK parameter values (CL, V, etc.) for trastuzumab deruxtecan in the text. |
| popPK | Yin_2021_2 | irrelevant | 2 | 0 | The paper is an exposure-response analysis that uses PK parameters from a separate population PK study (reference 12) and does not report original quantitative PK parameter values (CL, V, etc.) in the text. |
| popPK | Yoshihara_2023 | relevant | 10 | 2 | The paper describes a population pharmacokinetic model for trastuzumab deruxtecan, but the specific numeric parameter values (e.g., clearance, volume) are not present in the provided abstract text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 21:35 UTC</sub>
