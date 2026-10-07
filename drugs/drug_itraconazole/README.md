<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J02A&quot;,&quot;href&quot;:&quot;atc/J02A.md&quot;},{&quot;label&quot;:&quot;itraconazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Itraconazole_Comisar2025_reference&quot;,&quot;label&quot;:&quot;Comisar_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# itraconazole

- **generic name:** itraconazole
- **ATC codes:** `J02AC02`
- **DrugBank:** [DB01167](https://go.drugbank.com/drugs/DB01167) · **PubChem:** [CID 55283](https://pubchem.ncbi.nlm.nih.gov/compound/55283)
- **molar mass:** 705.633 g/mol (C35H38Cl2N8O4) — DrugBank
- **groups:** approved, investigational

## About

Itraconazole is an antifungal medicine used to treat a range of fungal infections, including aspergillosis, candidiasis, histoplasmosis, blastomycosis, onychomycosis, and other mycoses. It is an approved, widely used systemic antifungal and appears on the WHO list of essential medicines, though it carries a boxed warning.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411229](https://www.wikidata.org/wiki/Q411229) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fosravuconazole | metabolite | 547.473 | C23H20F2N5O5PS | PubChem | [9807507](https://pubchem.ncbi.nlm.nih.gov/compound/9807507) | Chu_2025 |
| hydroxyitraconazole | metabolite | 721.64 | C35H38Cl2N8O5 | PubChem | [108222](https://pubchem.ncbi.nlm.nih.gov/compound/108222) | Chu_2025 |
| itraconazole, hydroxyitraconazole | metabolite | 705.641 | C35H38Cl2N8O4 | PubChem | [55283](https://pubchem.ncbi.nlm.nih.gov/compound/55283) | Chu_2025 |
| ravuconazole | metabolite | 437.468 | C22H17F2N5OS | PubChem | [467825](https://pubchem.ncbi.nlm.nih.gov/compound/467825) | Chu_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 12:36 | 5:21 | 1/1/0 | 1/0/0 | 0/0/0 | 236,771/18,379 | einfracz / qwen3.8-27b | 10 | 2/8 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Comisar_2025_reference](drugs/drug_itraconazole/Itraconazole_Comisar2025_reference.md) | ▶ model + simulator | 2-compartment, oral | 5 | Comisar CM et al., Population Pharmacokinetic Modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.70051](https://doi.org/10.1002/psp4.70051) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chu_2025_reference](drugs/drug_itraconazole/Itraconazole_Chu2025_reference.md) | — | general linear (no model) | 8 (+2 cov.) | Chu WY et al., Pharmacokinetics and Pharmacodynamics o…, The Journal of infectious d… (2025) | [10.1093/infdis/jiaf279](https://doi.org/10.1093/infdis/jiaf279) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Varghese_2022_SFV_Nluc](drugs/drug_itraconazole/pd_Varghese_2022_SFV_Nluc.md) | SFV-Nluc replication ← itraconazole · direct sigmoid Emax (Hill) effect | — | Varghese FS et al., Posaconazole inhibits multiple steps of…, Antiviral research (2022) | [10.1016/j.antiviral.2021.105223](https://doi.org/10.1016/j.antiviral.2021.105223) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=itraconazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor, `ABCG2` inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor, `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2B6` inhibitor, `CYP2E1` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` inducer | DrugBank actor |
| metabolism | small intestine | `CYP1A1` inducer, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 76 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Fuhr_2022 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of felodipine (a CYP3A4 substrate), where itraconazole is used only as a perpetrator drug for drug-drug interaction modeling, not as the subject drug. |
| popPK | Hagihara_2011 | irrelevant | 2 | 0 | The study reports pharmacokinetic descriptors (AUC, Cmax, Cmin) rather than standard disposition parameters like clearance, volume of distribution, or half-life, and the specific numeric values for these descriptors are not provided in the evidence text. |
| popPK | Iga_2017 | irrelevant | 1 | 0 | The paper is a review of DDI prediction methods where itraconazole is mentioned as a perpetrator/inhibitor (comparator) for other drugs like midazolam, not as the subject drug for which PK parameters are being reported. |
| popPK | Jaminion_2020 | irrelevant | 1 | 0 | Itraconazole is used only as a co-administered inhibitor for a DDI study on basmisanil, with no report of itraconazole's own quantitative disposition parameters. |
| popPK | Jansen_2023 | relevant | 10 | 2 | The paper describes a population PK model for itraconazole, but the specific numeric parameter estimates are in Table 2 which is not included in the provided evidence. |
| popPK | Junkert_2024 | irrelevant | 0 | 0 | The study is a scoping review of ciprofloxacin pharmacokinetics, and itraconazole is only mentioned as a co-administered drug interaction. |
| popPK | Varghese_2022 | irrelevant | 0 | 0 | The study is an in-vitro virology investigation of posaconazole's antiviral mechanism; itraconazole is only a comparative agent, and no pharmacokinetic parameters are reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 12:32 UTC</sub>
