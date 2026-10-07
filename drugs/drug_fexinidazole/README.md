<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;fexinidazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fexinidazole_Watson2019_reference&quot;,&quot;label&quot;:&quot;Watson_2019_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# fexinidazole

- **generic name:** fexinidazole
- **ATC codes:** `P01CA03`
- **DrugBank:** [DB12265](https://go.drugbank.com/drugs/DB12265) · **PubChem:** [CID 68792](https://pubchem.ncbi.nlm.nih.gov/compound/68792)
- **molar mass:** 279.31 g/mol (C12H13N3O3S) — DrugBank
- **groups:** approved

## About

Fexinidazole is an antiprotozoal medicine used to treat trypanosomiasis (sleeping sickness). It is an approved medicine and is used mainly in regions where the disease occurs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5446115](https://www.wikidata.org/wiki/Q5446115) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| fexinidazole | parent | 279.31 | C12H13N3O3S | DrugBank | [68792](https://pubchem.ncbi.nlm.nih.gov/compound/68792) | Watson_2019 |
| fexinidazole sulfone (M2) | metabolite | — (mass units only) | — | — | — | — |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:48 | 6:37 | 1/0/0 | 0/1/1 | 0/0/0 | 410,006/22,853 | ollama / glm-5.3-flash | 7 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Watson_2019_reference](drugs/drug_fexinidazole/Fexinidazole_Watson2019_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Verrest_2024_parasite_load](drugs/drug_fexinidazole/pd_Verrest_2024_parasite_load.md) | blood Leishmania parasite load (kDNA qPCR) ← fexinidazole (sum of M1 and M2 metabolites) · direct linear effect | model (no simulator) | Verrest L et al., Leishmania blood parasite dynamics duri…, PLoS neglected tropical dis… (2024) | [10.1371/journal.pntd.0012078](https://doi.org/10.1371/journal.pntd.0012078) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_ALT](drugs/drug_fexinidazole/pd_Watson_2019_ALT.md) | alanine aminotransferase (peak) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_AST](drugs/drug_fexinidazole/pd_Watson_2019_AST.md) | aspartate aminotransferase (peak) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_hemoglobin_concentration_nadir](drugs/drug_fexinidazole/pd_Watson_2019_hemoglobin_concentration_nadir.md) | hemoglobin concentration (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_lymphocyte_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_lymphocyte_count_nadir.md) | lymphocyte count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_neutrophil_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_neutrophil_count_nadir.md) | neutrophil count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Watson_2019_platelet_count_nadir](drugs/drug_fexinidazole/pd_Watson_2019_platelet_count_nadir.md) | platelet count (nadir) ← fexinidazole sulfone metabolite (M2) · direct sigmoid Emax (Hill) effect | — | Watson JA et al., Pharmacokinetic-Pharmacodynamic Assessm…, Antimicrobial agents and ch… (2019) | [10.1128/AAC.02515-18](https://doi.org/10.1128/AAC.02515-18) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fexinidazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP1A2` inducer/inhibitor/substrate, `CYP2B6` inducer/inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `FMO3` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor, `SLC22A8` inhibitor, `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Cumming_2026 | irrelevant | 0 | 0 | This is a PK-PD study of BMH-21 analog Compound 2, not fexinidazole, which is only mentioned as background therapy; no fexinidazole disposition parameters are reported. |
| popPK | Fersing_2020 | irrelevant | 0 | 0 | Fexinidazole is only a comparator/reference drug; PK parameters (t1/2, CL, AUC) reported are for a different compound (hit 19) in mouse. |
| popPK | Fersing_2020_2 | irrelevant | 0 | 0 | Fexinidazole is only a reference/comparator drug; the PK parameters (t1/2 7.7 h, clearance 0.51 mL/h) are for compound 8, a different imidazopyridine derivative, in mouse. |
| popPK | Paoli-Lombardo_2022 | irrelevant | 0 | 0 | Medicinal chemistry SAR paper on new antileishmanial imidazopyridine derivatives; fexinidazole is only a reference comparator and no population-PK disposition parameters (CL, V, ka) for it are reported. |
| popPK | Rivas_2024 | irrelevant | 0 | 0 | This is a medicinal chemistry/in vitro study of Ru(II) ferrocenyl compounds; fexinidazole is only mentioned as background and no PK parameters are reported. |
| popPK | Rocha-Hasler_2021 | irrelevant | 0 | 0 | In vitro/in vivo efficacy study of posaconazole-tomatidine combinations against T. cruzi; fexinidazole is only a combination partner with EC50/FICI data, no PK parameters. |
| popPK | Verrest_2024 | irrelevant | 3 | 1 | This is a PK-PD model of Leishmania parasite dynamics; fexinidazole's own PK model parameters (CL etc.) come from a prior internal report/supplementary material and no numeric fexinidazole disposition values appear in the evidence. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:43 UTC</sub>
