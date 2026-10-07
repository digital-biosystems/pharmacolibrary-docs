<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01C&quot;,&quot;href&quot;:&quot;atc/P01C.md&quot;},{&quot;label&quot;:&quot;benznidazole&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Benznidazole_Frade2022_reference&quot;,&quot;label&quot;:&quot;Frade_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benznidazole/Benznidazole_Frade2022_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Benznidazole_Soy2015_reference&quot;,&quot;label&quot;:&quot;Soy_2015_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_benznidazole/Benznidazole_Soy2015_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# benznidazole

- **generic name:** benznidazole
- **ATC codes:** `P01CA02`
- **DrugBank:** [DB11989](https://go.drugbank.com/drugs/DB11989) · **PubChem:** [CID 31593](https://pubchem.ncbi.nlm.nih.gov/compound/31593)
- **molar mass:** 260.253 g/mol (C12H12N4O3) — DrugBank
- **groups:** approved, investigational

## About

Benznidazole is an antiparasitic medicine used to treat trypanosomiasis (Chagas disease). It is on the WHO list of essential medicines and is used mainly in regions where Chagas disease occurs.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q425300](https://www.wikidata.org/wiki/Q425300) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| benznidazole | parent | 260.253 | C12H12N4O3 | DrugBank | [31593](https://pubchem.ncbi.nlm.nih.gov/compound/31593) | Altcheh_2014, Altcheh_2023, Assmus_2025, Assmus_2025_2, Frade_2022, Soy_2015 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 07:42 | 7:06 | 2/2/2 | 0/0/2 | 0/0/0 | 414,482/25,317 | ollama / glm-5.3-flash | 11 | 0/11 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Frade_2022_reference](drugs/drug_benznidazole/Benznidazole_Frade2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Frade VP et al., Population pharmacokinetic modeling of…, Revista do Instituto de Med… (2022) | [10.1590/S1678-9946202264004](https://doi.org/10.1590/S1678-9946202264004) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Soy_2015_reference](drugs/drug_benznidazole/Benznidazole_Soy2015_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Soy D et al., Population pharmacokinetics of benznida…, Antimicrobial agents and ch… (2015) | [10.1128/AAC.05018-14](https://doi.org/10.1128/AAC.05018-14) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Altcheh_2014_reference](drugs/drug_benznidazole/Benznidazole_Altcheh2014_reference.md) | — | 1-compartment (no model) | 1 | Altcheh J et al., Population pharmacokinetic study of ben…, PLoS neglected tropical dis… (2014) | [10.1371/journal.pntd.0002907](https://doi.org/10.1371/journal.pntd.0002907) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Altcheh_2023_reference](drugs/drug_benznidazole/Benznidazole_Altcheh2023_reference.md) | — | 1-compartment (no model) | 1 | Altcheh J et al., Population pharmacokinetics of benznida…, PLoS neglected tropical dis… (2023) | [10.1371/journal.pntd.0010850](https://doi.org/10.1371/journal.pntd.0010850) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub><br><sub>route_to: `human_review`</sub> | [Assmus_2025_reference](drugs/drug_benznidazole/Benznidazole_Assmus2025_reference.md) | — | 1-compartment (no model) | 1 | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Assmus_2025_2_reference](drugs/drug_benznidazole/Benznidazole_Assmus2025v2_reference.md) | — | 1-compartment (no model) | 0 | Assmus F et al., Population pharmacokinetic-pharmacodyna…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0013522](https://doi.org/10.1371/journal.pntd.0013522) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure](drugs/drug_benznidazole/pd_Assmus_2025_cure.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure_2](drugs/drug_benznidazole/pd_Assmus_2025_cure_2.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure_3](drugs/drug_benznidazole/pd_Assmus_2025_cure_3.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure_4](drugs/drug_benznidazole/pd_Assmus_2025_cure_4.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure_5](drugs/drug_benznidazole/pd_Assmus_2025_cure_5.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Assmus_2025_cure_6](drugs/drug_benznidazole/pd_Assmus_2025_cure_6.md) | Parasitological cure (BLI negative after in vivo and ex vivo imaging) ← benznidazole · categorical (graded) response model | — | Assmus F et al., Pharmacokinetic-pharmacodynamic modelin…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0012968](https://doi.org/10.1371/journal.pntd.0012968) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Assmus_2025_2_qPCR_positivity](drugs/drug_benznidazole/pd_Assmus_2025_2_qPCR_positivity.md) | qPCR positivity (proportion of T. cruzi qPCR-positive blood samples post-treatment) ← benznidazole · categorical (graded) response model | model (no simulator) | Assmus F et al., Population pharmacokinetic-pharmacodyna…, PLoS neglected tropical dis… (2025) | [10.1371/journal.pntd.0013522](https://doi.org/10.1371/journal.pntd.0013522) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benznidazole) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 20 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 2  ·  needs_review 2  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Soy_2015.pdf` | Soy D et al., Population pharmacokinetics of benznida…, Antimicrobial agents and ch… (2015) | popPK | 10 | [10.1128/AAC.05018-14](https://doi.org/10.1128/AAC.05018-14) | [25824212](https://pubmed.ncbi.nlm.nih.gov/25824212) | Population PK model for benznidazole with numeric CL/F, V/F, and Ka reported directly in the abstract. |
| `Perin_2020.pdf` | Perin L et al., Population pharmacokinetics and biodist…, The Journal of antimicrobia… (2020) | popPK | 9 | [10.1093/jac/dkaa130](https://doi.org/10.1093/jac/dkaa130) | [32356873](https://pubmed.ncbi.nlm.nih.gov/32356873) | Population PK (NONMEM) of benznidazole in mice, but no numeric parameter values (CL, V, etc.) appear in the provided evidence, likely in tables/supplement not included. |
| `Silveira_2026.pdf` | Silveira GPE et al., Benznidazole pharmacokinetics in patien…, The Journal of antimicrobia… (2026) | popPK | 7 | [10.1093/jac/dkaf416](https://doi.org/10.1093/jac/dkaf416) | [41277594](https://pubmed.ncbi.nlm.nih.gov/41277594) | Human NCA PK study of benznidazole with numeric Cmax, AUC, and Tmax values reported directly in the abstract, though no CL/V/half-life values appear. |

<sub>queue written 2026-10-07T07:35:58.357096+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Alonso-Vega_2021 | irrelevant | 3 | 0 | This is a trial design/protocol paper; popPK parameters (CL, Vd) are only planned to be measured, with no numeric PK values present. |
| popPK | Cortes_2015 | irrelevant | 0 | 0 | In vitro study of gallate TPP+ derivatives against T. cruzi; benznidazole is only mentioned as an existing drug, with no PK parameters. |
| popPK | Dos_2023 | irrelevant | 1 | 2 | This is a PET imaging study of the radiotracer [18F]FBNA (a benznidazole analogue), not a PK study of benznidazole itself; kinetic parameters (K1, k2, k3) describe the radiotracer in mouse tumours, not benznidazole disposition. |
| popPK | Fukushima_2021 | irrelevant | 0 | 0 | This is a zebrafish embryo toxicology screening study; benznidazole is only a comparator and no PK parameters (CL, V, ka, half-life) are reported. |
| popPK | Peres_2023 | irrelevant | 0 | 0 | In vitro/in silico antiparasitic study of plumbagin; benznidazole is only a reference comparator, no PK disposition parameters for it are reported. |
| popPK | Perin_2020 | relevant | 9 | 3 | Population PK (NONMEM) of benznidazole in mice, but no numeric parameter values (CL, V, etc.) appear in the provided evidence, likely in tables/supplement not included. |
| popPK | Peron_2017 | irrelevant | 0 | 0 | In vitro antiparasitic efficacy study of a new compound; benznidazole is only a comparator/co-administered drug with no PK parameters. |
| popPK | Rubio-Hernández_2024 | irrelevant | 0 | 0 | PK data (bioavailability, half-life) are for the new selenazole compound Se 2h, not benznidazole, which is only a comparator. |
| popPK | Seguel_2016 | irrelevant | 0 | 0 | In vitro/in vivo efficacy interaction study of benznidazole with pentamidine; no PK parameters or numeric disposition values reported. |
| popPK | Valencia_2025 | irrelevant | 0 | 0 | In vitro antiparasitic activity study of coumarin-chalcone hybrids; benznidazole is only a comparator and no PK parameters are reported. |
| popPK | Vasconcelos_2018 | irrelevant | 0 | 0 | In-vitro efficacy study of pyrazinoate derivatives with benznidazole only as a comparator; no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 07:36 UTC</sub>
