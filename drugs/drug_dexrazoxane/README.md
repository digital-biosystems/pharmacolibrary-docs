<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;V03A&quot;,&quot;href&quot;:&quot;atc/V03A.md&quot;},{&quot;label&quot;:&quot;dexrazoxane&quot;}]"></div>

# dexrazoxane

- **generic name:** dexrazoxane
- **ATC codes:** `V03AF02`
- **DrugBank:** [DB00380](https://go.drugbank.com/drugs/DB00380) · **PubChem:** [CID 71384](https://pubchem.ncbi.nlm.nih.gov/compound/71384)
- **molar mass:** 268.2691 g/mol (C11H16N4O4) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Dexrazoxane is a detoxifying agent used to protect against tissue damage from anthracycline chemotherapy, notably in breast cancer patients, and to treat extravasation of certain drugs. It remains authorised in the European Union, though its approved status has been accompanied by investigational uses and some withdrawn indications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q524995](https://www.wikidata.org/wiki/Q524995) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dexrazoxane | parent | 268.269 | C11H16N4O4 | DrugBank | [71384](https://pubchem.ncbi.nlm.nih.gov/compound/71384) | Baldwin_1996 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 19:01 | 1:50 | 0/1/0 | 2/0/0 | 0/0/0 | 90,542/6,906 | ollama / glm-5.3-flash | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Baldwin_1996_reference](drugs/drug_dexrazoxane/Dexrazoxane_Baldwin1996_reference.md) | — | 1-compartment (no model) | 8 | Baldwin JR et al., Dose-independent pharmacokinetics of th…, Biopharmaceutics & drug dis… (1996) | [10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5](https://doi.org/10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R](drugs/drug_dexrazoxane/pd_Mody_2023_R.md) | Cell viability (JIMT-1, 72 h concentration-response) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_2](drugs/drug_dexrazoxane/pd_Mody_2023_R_2.md) | Cell viability (MDA-MB-468, 72 h concentration-response) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_3](drugs/drug_dexrazoxane/pd_Mody_2023_R_3.md) | Cell viability (JIMT-1, static combination with DOX, competitive interaction model) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_4](drugs/drug_dexrazoxane/pd_Mody_2023_R_4.md) | Cell viability (MDA-MB-468, static combination with DOX, competitive interaction model) ← dexrazoxane · direct sigmoid Emax (Hill) effect | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_5](drugs/drug_dexrazoxane/pd_Mody_2023_R_5.md) | Cell viability over time (JIMT-1, single-agent and combination cellular PD model) ← dexrazoxane · delayed effect through transit (transduction) compartments | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Mody_2023_R_6](drugs/drug_dexrazoxane/pd_Mody_2023_R_6.md) | Cell viability over time (MDA-MB-468, single-agent and combination cellular PD model) ← dexrazoxane · delayed effect through transit (transduction) compartments | — | Mody H et al., Frontiers in pharmacology (2023) | [10.3389/fphar.2023.1239141](https://doi.org/10.3389/fphar.2023.1239141) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> | [Mody_2023_2_R](drugs/drug_dexrazoxane/pd_Mody_2023_2_R.md) | AC16 cell viability ← dexrazoxane · direct linear effect | — | Mody H et al., In vitro to clinical translational phar…, Scientific reports (2023) | [10.1038/s41598-023-29964-4](https://doi.org/10.1038/s41598-023-29964-4) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Mody_2023_2_R_2](drugs/drug_dexrazoxane/pd_Mody_2023_2_R_2.md) | AC16 cell viability (DEX cardioprotection against DOX-induced cell death) ← dexrazoxane · direct Emax (saturable) effect | — | Mody H et al., In vitro to clinical translational phar…, Scientific reports (2023) | [10.1038/s41598-023-29964-4](https://doi.org/10.1038/s41598-023-29964-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dexrazoxane) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: TOP2A (inhibitor), TOP2B (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Baldwin_1996.pdf` | Baldwin JR et al., Dose-independent pharmacokinetics of th…, Biopharmaceutics & drug dis… (1996) | popPK | 10 | [10.1002/(SICI)1099-081X(199608)17:6&lt;541::AID-BDD975&gt;3.0.CO;2-5](https://doi.org/10.1002/(SICI)1099-081X(199608)17:6<541::AID-BDD975>3.0.CO;2-5) | [8866044](https://pubmed.ncbi.nlm.nih.gov/8866044) | Full PK parameters (CL, Vss, t½, renal clearance) for dexrazoxane are reported directly in the abstract. |
| `Jirkovský_2018.pdf` | Jirkovský E et al., Pharmacokinetics of the Cardioprotectiv…, The Journal of pharmacology… (2018) | popPK | 8 | [10.1124/jpet.117.244848](https://doi.org/10.1124/jpet.117.244848) | [29273587](https://pubmed.ncbi.nlm.nih.gov/29273587) | PK of dexrazoxane and metabolite ADR-925 via NCA and population PK in rabbits, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |

<sub>queue written 2026-10-07T19:00:31.156672+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baldwin_1992 | irrelevant | 2 | 2 | Dexrazoxane is only the co-administered agent; the PK parameters (CL, half-lives, AUC) reported are for doxorubicin, not dexrazoxane itself. |
| popPK | Chang_2025 | irrelevant | 1 | 1 | This is a pharmacodynamic (Top2b degradation) study in humans; the only PK mention is a literature half-life of two hours with no clearance, volume, or model parameters reported. |
| popPK | Jirkovský_2018 | relevant | 8 | 2 | PK of dexrazoxane and metabolite ADR-925 via NCA and population PK in rabbits, but numeric parameter values are not present in the provided evidence (likely in tables/figures not included). |
| popPK | Mody_2023 | irrelevant | 2 | 2 | This is an in vitro PD drug-interaction study in cancer cell lines; DEX PK is only simulated from prior literature, with no dexrazoxane disposition parameters (CL, V, half-life) reported here. |
| popPK | Rodriguez_2006 | irrelevant | 0 | 0 | In vitro/ischemia contractility study; dexrazoxane only used as an antioxidant agent, no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 19:00 UTC</sub>
