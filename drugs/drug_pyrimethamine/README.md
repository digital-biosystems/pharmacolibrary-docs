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

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

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
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Falloon_1994_reference](drugs/drug_pyrimethamine/Pyrimethamine_Falloon1994_reference.md) | — | 1-compartment (no model) | 2 | Falloon J et al., Pharmacokinetics and safety of weekly d…, Antimicrobial agents and ch… (1994) | [10.1128/AAC.38.7.1580](https://doi.org/10.1128/AAC.38.7.1580) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.824). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Odongo_2015_reference](drugs/drug_pyrimethamine/Pyrimethamine_Odongo2015_reference.md) | — | 2-compartment (no model) | 8 (+2 cov.) | Odongo CO et al., Trimester-Specific Population Pharmacok…, Drugs in R&D (2015) | [10.1007/s40268-015-0110-z](https://doi.org/10.1007/s40268-015-0110-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.417). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Salman_2011_reference](drugs/drug_pyrimethamine/Pyrimethamine_Salman2011_reference.md) | — | parent + metabolite (no model) | 4 | Salman S et al., Pharmacokinetic properties of conventio…, Antimicrobial agents and ch… (2011) | [10.1128/AAC.01075-10](https://doi.org/10.1128/AAC.01075-10) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.526). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: C2 negative clearance/volume in a covariate scenario or base (implausible — bas…</sub><br><sub>route_to: `human_review`</sub> | [de_2017_reference](drugs/drug_pyrimethamine/Pyrimethamine_de2017_reference.md) | — | 2-compartment (no model) | 9 | de Kock M et al., Pharmacokinetics of Sulfadoxine and Pyr…, CPT: pharmacometrics & syst… (2017) | [10.1002/psp4.12181](https://doi.org/10.1002/psp4.12181) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_luciferase_reporter_assay](drugs/drug_pyrimethamine/pd_Adeyemi_2023_T_gondii_parasite_viability_RH_2F_tachyzoites_l.md) | T. gondii parasite viability (RH-2F tachyzoites, luciferase reporter assay) ← pyrimethamine · inhibition effect | — | Adeyemi OS et al., The In Vitro Anti-Parasitic Activities…, Pharmaceuticals (Basel, Swi… (2023) | [10.3390/ph16030447](https://doi.org/10.3390/ph16030447) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 72 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

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
