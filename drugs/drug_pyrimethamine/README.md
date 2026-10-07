<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;pyrimethamine&quot;}]"></div>

# pyrimethamine

- **generic name:** pyrimethamine
- **ATC codes:** `P01BD01`, `P01BF04`, `P01BF09`
- **DrugBank:** [DB00205](https://go.drugbank.com/drugs/DB00205) · **PubChem:** [CID 4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993)
- **molar mass:** 248.711 g/mol (C12H13ClN4) — DrugBank
- **groups:** approved, investigational, vet_approved

## About

Pyrimethamine is an antiprotozoal medicine used to treat malaria, including falciparum malaria, and toxoplasmosis. It is an approved medicine, also approved for veterinary use, and appears on the WHO essential medicines list, so it remains in use worldwide.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q421072](https://www.wikidata.org/wiki/Q421072) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dapsone and pyrimethamine (pyrimethamine) | metabolite | 248.714 | C12H13ClN4 | PubChem | [4993](https://pubchem.ncbi.nlm.nih.gov/compound/4993) | Falloon_1994, Odongo_2015, Salman_2011, de_2017 |
| N(4)-acetylsulfadoxine | metabolite | 352.365 | C14H16N4O5S | PubChem | [160773](https://pubchem.ncbi.nlm.nih.gov/compound/160773) | Salman_2011 |
| sulfadoxine | metabolite | 310.328 | C12H14N4O4S | PubChem | [17134](https://pubchem.ncbi.nlm.nih.gov/compound/17134) | Salman_2011 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:15 | 8:16 | 0/3/1 | 1/0/0 | 0/0/0 | 426,937/24,372 | ollama / glm-5.3-flash | 11 | 2/9 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Falloon_1994_reference](drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference.md) | — | 1-compartment (no model) | 2 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Odongo_2015_reference](drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015) | [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Salman_2011_reference](drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference.md) | — | parent + metabolite (no model) | 4 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_reference](drugs/drug_pyrimethamine/Pyrimethamine_de2017_reference.md) | — | 2-compartment (no model) | 9 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_luciferase_reporter_assay](drugs/drug_pyrimethamine/pd_Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_l.md) | T. gondii parasite viability (RH-2F tachyzoites, luciferase reporter assay) ← pyrimethamine · inhibition effect | — | Adeyemi OS et al., The In Vitro Anti-Parasitic Activities…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph16030447](https://doi.org/10.3390/ph16030447) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pyrimethamine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP2C8` inhibitor | DrugBank actor |
| excretion | kidney | `SLC47A1` inhibitor, `SLC47A2` inhibitor | DrugBank actor |
| excretion | liver | `SLC47A1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: DHFR (inhibitor), FOLR1 (modulator), HEXB (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Salman_2011.pdf` | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | popPK | 10 | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) | [21282434](https://pubmed.ncbi.nlm.nih.gov/21282434) | Population PK two-compartment model of pyrimethamine in infants; abstract gives half-life and AUC but full CL/V parameter values likely in tables/supplement not shown. |
| `Bell_2011.pdf` | Bell DJ et al., Population pharmacokinetics of sulfadox…, Clinical pharmacology and t… (2011) | popPK | 8 | [10.1038/clpt.2010.297](https://doi.org/10.1038/clpt.2010.297) | [21191379](https://pubmed.ncbi.nlm.nih.gov/21191379) | Population PK models for pyrimethamine in children are described, but the abstract gives no numeric CL/V/ka values, which likely reside in tables or supplementary material not provided. |

<sub>queue written 2026-10-07T08:08:36.349060+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abbaali_2021 | irrelevant | 0 | 0 | In vitro Toxoplasma drug-efficacy study; pyrimethamine is only a comparator, with no PK parameters reported. |
| popPK | Adeyemi_2023 | irrelevant | 0 | 0 | In vitro anti-Toxoplasma study of emodin; pyrimethamine is only a positive-control comparator with no PK parameters. |
| popPK | Bell_2011 | relevant | 8 | 3 | Population PK models for pyrimethamine in children are described, but the abstract gives no numeric CL/V/ka values, which likely reside in tables or supplementary material not provided. |
| popPK | Elati_2026 | irrelevant | 0 | 0 | In vitro drug screening of tubercidin analogues against T. gondii; pyrimethamine is only a comparator and no PK parameters are reported. |
| popPK | Jafari_2021 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator in an anti-Toxoplasma efficacy study; no PK parameters (CL, V, half-life, model) are reported. |
| popPK | Karunajeewa_2010 | irrelevant | 2 | 2 | Pyrimethamine is only a co-administered drug; the PK model and parameters are for chloroquine/DECQ, with no pyrimethamine values reported. |
| popPK | Ma_2022 | irrelevant | 0 | 0 | This is an in vitro/in vivo efficacy study of tilmicosin and ATLL against T. gondii; pyrimethamine is only a positive-control comparator with no PK parameters reported. |
| popPK | Moore_2015 | irrelevant | 0 | 0 | The study models piperaquine breast-milk transfer; pyrimethamine is only part of a co-administered combination therapy, with no pyrimethamine PK parameters reported. |
| popPK | Ndlovu_2024 | irrelevant | 0 | 0 | Medicinal chemistry study of new anti-Toxoplasma compounds; pyrimethamine only appears as a comparator EC50, with no PK parameters. |
| popPK | Philipps_1998 | irrelevant | 0 | 0 | In vitro parasite susceptibility study (EC50 values), not a pharmacokinetic study of pyrimethamine disposition. |
| popPK | Qiu_2025 | irrelevant | 0 | 0 | Pyrimethamine is only a comparator (EC50 0.60 µM in Fig. S1, not provided); no PK parameters for pyrimethamine. |
| popPK | Ramharter_2019 | irrelevant | 0 | 0 | This is a population PK study of mefloquine (and its metabolite CMQ), not pyrimethamine; pyrimethamine appears only as part of the SP comparator regimen. |
| popPK | Salman_2010 | irrelevant | 2 | 1 | The paper models azithromycin's population PK; pyrimethamine is only co-administered as SP with no pyrimethamine parameter values reported. |
| popPK | Zuidema_1986 | irrelevant | 0 | 0 | This is a clinical PK review of dapsone; pyrimethamine is only mentioned as a co-administered agent in malaria prophylaxis, with no PK parameters for pyrimethamine. |
| popPK | da_2025 | irrelevant | 0 | 0 | Pyrimethamine is only mentioned as current standard-of-care; no PK parameters for it are reported. |
| popPK | van_2025 | irrelevant | 0 | 0 | This is a meta-analysis of IPTp-SP effectiveness and parasite resistance markers, with no PK parameters (CL, V, ka, half-life, or PK model) for pyrimethamine reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 08:08 UTC</sub>
